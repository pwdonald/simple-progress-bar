/// <reference path="_references.ts" />

var clc = require('cli-color'),
    labelStyle = clc.whiteBright.bgWhite.italic,
    progressStyle = clc.blueBright.bgWhite.bold,
    percentstyle = clc.yellowBright.bgWhite.italic;

class ProgressBar {
    private __visibleArray: Array<string> = new Array<string>(10);
    private __percent: number = 0;
    private __progressBarLength: number = 0;
    private __drawCount = 0;

    constructor(public label: string = 'Progress',
        public format: string = ':label :bar :percent',
        private __output: NodeJS.WritableStream = process.stdout) { }

    update(completeCount: number, totalCount: number) {
        this.__percent = (completeCount / totalCount);
        this.__progressBarLength = Math.floor((this.__percent * 10));
        this.__draw();
    }

    private __draw() {
        if (this.__drawCount < 1) {
            this.__output.write('\r\n');
        }
        (<any>process.stdout).cursorTo(0);
        //(<any>process.stdout).clearLine(1);

        for (var i = 0; i < this.__progressBarLength; i++) {
            this.__visibleArray[i] = '=';
        }

        process.stdout.write(this.__formatText());
        this.__drawCount++;
    }

    private __formatText(): string {
        var toRtn = this.format;

        toRtn = toRtn.replace(':label', labelStyle(this.label));
        toRtn = toRtn.replace(':bar', progressStyle(this.__visibleArray.join('')));
        toRtn = toRtn.replace(':percent', percentstyle(Math.floor((this.__percent * 100)) + ' %'));

        return toRtn;
    }

}

export = ProgressBar;