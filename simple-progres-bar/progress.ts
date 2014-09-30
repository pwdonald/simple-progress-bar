﻿/// <reference path="_references.ts" />


class ProgressBar {
    private __visibleArray: Array<string> = new Array[10]();
    private __percent: number = 0;
    private __progressBarLength: number = 0;

    constructor(public label: string = 'Progress', public format: string = '%label %bar %percent', private __output: NodeJS.WritableStream = process.stdout) {
        this.__output.write('\r\n');
    }

    update(percent: number) {
        this.__percent = percent;
        this.__progressBarLength = Math.floor(percent);
        this.draw();
    }

    draw() {
        (<any>process.stdout).cursorTo(0);
        (<any>process.stdout).clearLine(1);

        for (var i = 0; i < this.__progressBarLength; i++) {
            this.__visibleArray[i] = '=';
        }

        process.stdout.write(this.__formatText());
    }

    private __formatText(): string {
        var toRtn = this.format;

        toRtn.replace('%label', this.label);
        toRtn.replace('%bar', this.__visibleArray.join(''));
        toRtn.replace('%percent', this.__percent + ' %');

        return toRtn;
    }

}

export = ProgressBar;