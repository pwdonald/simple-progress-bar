/// <reference path="../_references.ts" />
import Progressbar = require('../progress');
import events = require('events');

var pb = new Progressbar('Test Value', ':label \t [ :bar ] :percent', process.stdout),
    percentageComplete = 0,
    totalPercentage = 100,
    pubsub = new events.EventEmitter();

var timer = setInterval(() => {
    if (percentageComplete <= 90) {
        percentageComplete += 10;
        pubsub.emit('progress', percentageComplete);
    } else {
        pubsub.emit('done');
    }
}, 1000);

pubsub.on('progress', (progressCount) => {
    pb.update(progressCount, totalPercentage);
});

pubsub.on('done', () => {
    process.stdout.write('\r\nDone!');
    clearInterval(timer);
});
