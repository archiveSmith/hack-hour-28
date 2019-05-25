 
//returns the Math.floor of the mean of the numbers in array
function getMean(array){
    //VALIDATION: ARRAY is all integers
    
        let mean = null;
    
        let sum = array.reduce(function(acc,num){ acc = acc + num; return acc;}) //sum numbers in array
    
        return Math.floor(sum / array.length);
    }
    
    //returns mode of numbers in array
    // mode is which number appears the most in the array
    // if two numbers both occur the max number of times, return the larger one
    function getMode(array){
        //VALIDATION: ARRAY is all integers
        let mode = null;
    
        //look through array and add each elemnt to object with elemnt as key
        // value will be number of times number appears in array
        const count = {};
        array.forEach(element => {
            if(count[element]){
                count[element]++;
            }else{
                count[element] = 1;
            }
        });
    
    
        let =  maxCount = 0; //largest count currently seen
        let =  mode = null; //current mode
    
        //iterate through the count object
        for(let num in count){        
            
            if(count[num] > maxCount){
                maxCount = count[num];
                mode = Number.parseInt(num); //the key num is a stirng, conver to number
            } else if(count[num] === maxCount){ //if the counts between two numbers are equal set mode to the larger one
                mode = num > mode ? num : mode;
            }
        }
    
        return mode;
    }
    
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
    
    
    function modemean(array) {
        let mode = getMode(array);
        let mean = getMean(array);
    
        return mode === mean;
    }
    
    //  let a = [7,7,7,7,7,8,8,3,33,3,3,3,3,3,3,3,,8,7,8,7,7]
    
    //  console.log(modemean(a));
    
    module.exports = modemean;
    