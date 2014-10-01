[![NPM](https://nodei.co/npm/simple-progress-bar.png)](https://npmjs.org/package/simple-progress-bar)

simple-progress-bar
===================
A console progress bar that is easy to use and understand. 

###Constructor:
`var progressbar = new ProgressBar(labelText, formatString, writeableStream);`

1. **labelText**: *string* (Default: *Progress*) The value of the label next to the progress bar.

2. **formatString**: *string* (Default: *:label :bar :percent*) The string containing format elements to be replaced on update.
    1. `:label`     replaced with the *labelText* value.
    2. `:bar`       replaced with the progress bar.
    3. `:percent`   replaced with the current progress percent.

3. **writeableStream**: *obj* (Default: stdout) The writable stream the progressbar will be written to.

###Example Usage:
```
var ProgressBar = require('simple-progrss-bar'),
    pb;

globals.pubsub.on('event', (itemCount, totalItems) => {
    pb = pb || new ProgressBar('Progress: ', ':label \t [ :bar ] :percent ');
    pb.update(itemCount, totalItems);
});
```

###Methods:
`update(itemCount, totalItems)`: updates the progress bar to the percent calculated by the itemCount divided by the totalItems value.

###Building:

`npm install`

The postinstall script will run a grunt task that will compile the TypeScript to JavaScript.


####Built with TypeScript.
