"use strict";
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
  this.triggerOptions = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  this.triggerOptions[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  for (const funcOption in this.triggerOptions) {
    if (funcName === funcOption) {
      let storedFunc = this.triggerOptions[funcOption];
      storedFunc(...args);
    }
  }
};

const instance = new EventEmitter();
let count = 0;

instance.on("increment", function() {
  count++;
});

instance.on("decrement", function() {
  count--;
});

instance.trigger("increment");
console.log(count);

instance.trigger("decrement");
console.log(count);

module.exports = EventEmitter;
