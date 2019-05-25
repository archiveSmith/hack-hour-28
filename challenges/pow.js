/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, flag = false) {
    // console.log(`Getting ${base} to the power of ${power}`);
    if (power === 0) return 1;

    if (power > 0) {
        return base * pow(base, power - 1, true);
    } else {
        let negative = base * pow(base, power + 1, true);
        if (flag === false) negative = 1 / negative;
        return negative;
    }
}
 
function powShift(base, power) {

    let result = 1;
    let neg = (power < 0) ? true : false;
    if (neg) power *= -1;
    // console.log('neg: ', neg);

    while (power > 0) {
        // console.log('base: ', base);
        // console.log('power: ', power);


        if (power & 1 === 1) {
            result = result * base;
        }

        base = base * base;
        // console.log('base: ', base);
        power >>= 1;
        // console.log('power: ', power);

    }
    if (neg) { result = 1 / result }
    // console.log('result: ', result);

    return result;
}

b = 22345678765469999999999945
p = -12
times = 1000
// out = powShift(b, p);
// console.log(`Out: ${out}`);
// console.log('out2: ', out2);

console.log(`Calculate ${b} to the ${p} ${times} times`);

console.time("Liner");
for (let i = 0; i < times; i++) {
    out = pow(b, p)
}
console.timeEnd("Liner")

console.time("Bit Magic");
for (let i = 0; i < times; i++) {
    out2 = powShift(b, p)
}
console.timeEnd("Bit Magic")

out
out2



function divideByTwo(num) {
    while (num > 2) {
        if (num % 2 === 1) num -= 1;
        Math.floor(num = num / 2);
    }
    return num;
}

function bitShiftByTwo(num) {
    while (num > 2) {
        num = num >> 1;
    }
    return num;
}

startNum = 5000000;
size = 5000000;
console.time("divide");
for (let i = 0; i < size; i++) {
    out = divideByTwo(startNum);
}
console.timeEnd("divide")

console.time("shift");
for (let i = 0; i < size; i++) {
    out2 = bitShiftByTwo(startNum);
}
console.timeEnd("shift")


out
out2

module.exports = pow;

