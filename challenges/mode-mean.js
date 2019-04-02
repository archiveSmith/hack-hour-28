/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

 let sample = [2, 5, 7, 8, 5, 1, 9, 9, 2];


function modemean(array) {
    const sum = array.reduce((acc, curr) => {
        return acc + curr;
    })

    let mean = Math.floor(sum / array.length);
    
    let sorted = array.sort();
    let numMap = {};
    for(var i = 0; i < array.length; i++){
        if(numMap[array[i]] === undefined){
            numMap[array[i]] = 0;
        }        
            numMap[array[i]] += 1;
    }


    for(let keys in numMap){
        let value = numMap[keys];
        console.log(value);
     
       // for each key, if the value 

       console.log(value);
       console.log(keys)
    }
    let keyVals = Object.entries(numMap);
    for(let subArr of keyVals){
        
       
    }
    console.log(keyVals);
    
   
    let max = Math.max(...keyVals);

    console.log(max);
    console.log(numMap);

    if(max === mean){
        return true;
    }
    else{
        return false;
    }
}

console.log(modemean(sample));


module.exports = modemean;
