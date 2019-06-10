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
  this.listeners = {};
}

EventEmitter.prototype.on = function(event, func) {
  if (this.listeners[event] === undefined) this.listeners[event] = [];
  this.listeners[event].push(func);
};

EventEmitter.prototype.trigger = function(event, ...args) {
  const listeners = this.listeners[event];
  if (listeners === undefined) return undefined;

  listeners.forEach(fn => fn(...args));
};

const myListeners = new EventEmitter();

const yo = () => console.log("yo");
const hi = () => console.log("hi");
const hey = () => console.log("hey");
const sup = () => console.log("sup");
const hello = () => console.log("hello");

myListeners.on("click", yo);
myListeners.on("click", hi);
myListeners.on("click", hello);

myListeners.on("change", hey);
myListeners.on("change", sup);
myListeners.on("change", hello);

console.log("click!");
myListeners.trigger("click");
console.log("\nchange!");
myListeners.trigger("change");

myListeners.trigger("music");

module.exports = EventEmitter;
