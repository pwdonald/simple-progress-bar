/// <reference path="_references.ts" />

class ProgressBar {
    private __visibleArray: Array<string> = new Array[10]();

    constructor(label: string = 'Progress', format: string = '%label %bar %percent', private __output: NodeJS.WritableStream = process.stdout) {
        this.__output.write('\r\n');
    }

    update(percent: number) {
        
    }

}

export = ProgressBar;