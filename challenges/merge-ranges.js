/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

// assuming numbers never go past 24 and each meeting is 1 hour.
function mergeRanges(array) {
    if (!array || !Array.isArray(array)) { console.log("Invalid input array:", array); return -1 };

    const activeTimes = new Set();
    //process array and add all active hours into a set

    array.forEach(meeting => {
        // assume number in meeting array are sorted and only 2 elements
        if (meeting.length !== 2) { console.log("Imporoper formatted meeting information", meeting); return -1 }
        if (meeting[0] >= meeting[1]) { console.log("Improper formatted meeting information", meeting); return -1 }

        const start = meeting[0]
        const end = meeting[1]

        for (let i = start; i < end; i++) {
            activeTimes.add(i);
        }

    });

    // go through the set from 0-24.  Once a number is found in the set thats the start of a meeting block
    // continue until finding a number thats not in the set, that marks the end of a meeting block

    const retArray = [];
    let currMeeting = null;
    for (let i = 0; i <= 24; i++) {
        if (currMeeting === null) {
            if (activeTimes.has(i)) {
                currMeeting = [i];
            }
        } else {
            if (!activeTimes.has(i)) {
                //hit the end of a meeting block, add the previous to the end
                currMeeting.push(i);
                retArray.push(currMeeting);
                currMeeting = null;
            } else {
                //do nothing, this hour is in meetings
            }
        }

    }
    return retArray;
}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
let out = mergeRanges(times)


// console.log("Out Array");
// console.log(out);

// * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
