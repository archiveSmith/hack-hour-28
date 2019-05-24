'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
    this.funcObj = {};
}

EventEmitter.prototype.on = function(funcName, func) {
    this.funcObj[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    if(!this.funcObj[funcName]) return;    
    const func = this.funcObj[funcName];

    func(...args);
};

const mitter = new EventEmitter;

const myFunc = function(arg1 = "de", arg2 = "fault"){
    console.log(`1:${arg1}${arg2}:2`);
}

mitter.on('say',myFunc);

mitter.trigger('say');
mitter.trigger('say',1);
mitter.trigger('say',1,2);


module.exports = EventEmitter;
