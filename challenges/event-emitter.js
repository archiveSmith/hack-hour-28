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
  this.funcs = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if(!this.funcs.hasOwnProperty(funcName)) {
    this.funcs[funcName] = [func];
  } else {
    this.funcs[funcName].push(func);
  }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  let funcs = this.funcs[funcName];
  funcs.forEach((f) => {
    f(args);
  })
};
/*
let e = new EventEmitter();
let counter = 0;
e.on('increment', function() {
  counter ++
});
e.on('increment', function() {
  counter ++
});
console.log(e.funcs);
e.trigger('increment');
e.trigger('increment');

console.log(counter);
*/
module.exports = EventEmitter;
