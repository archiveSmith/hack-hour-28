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
    if(this.funcObj[funcName]){
        this.funcObj[funcName].add(func); 
    }else{
        this.funcObj[funcName] = new Set();  //set prevents duplications
        this.funcObj[funcName].add(func);
    }
    console.log(`Func ${funcName}: ${func}  --- added`);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    console.log(`func:${funcName} Args:${args}`);
    if(!this.funcObj[funcName]) return;    

    this.funcObj[funcName].forEach(func => {
        func(...args);        
    });;

};

// const mitter = new EventEmitter;

// let counter = 0;
// let counter2 = 0;

// mitter.on('increment',()=>{
//     counter++;
// })
// // mitter.on('increment_2',()=>{
// //     counter2++;
// // })
// // mitter.on('increment',()=>{
// //     counter2++;
// // })

// mitter.trigger("increment",1,2,3,4);
// console.log('counter: ', counter);
// console.log('counter2: ', counter2);
// mitter.trigger("increment");
// console.log('counter: ', counter);
// console.log('counter2: ', counter2);
// mitter.trigger("increment");
// // mitter.trigger("increment_2");
// // mitter.trigger("increment_2");
// console.log('counter: ', counter);
// console.log('counter2: ', counter2);


// const myFunc = function(arg1 = "de", arg2 = "fault"){
//     console.log(`1:${arg1}${arg2}:2`);
// }
// const myFunc2 = function(arg1 = "de", arg2 = "fault"){
//     console.log(`One:${arg1}${arg2}:two`);
// }

// mitter.on('say',myFunc);
// mitter.on('say',myFunc);
// mitter.on('say',myFunc2);

// mitter.trigger('say');
// console.log("================");
// mitter.trigger('say',1);
// console.log("================");

// mitter.trigger('say',1,2);


module.exports = EventEmitter;



// // Func say: 

 
// //  Func increment: 
//  function () { count++; } 
 
//  --- added 
// //  Func  increment: 
//  function () { count++; } 
 
// //  --- added 
 
// //  Func increment_2: 
//  function () { count_2++; } 
// //  --- added 
 
//  Func 
// //  increment: 
//  function () { count++; } 
// //  --- added 
 
// //  Func increment: 
 
//  function () { count_2++; } 
 
// //  --- added