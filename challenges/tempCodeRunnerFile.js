console.log(stringTrimmer('(())'))


 function stringTrimmer(input) {
    let trimmedString = [];
    const bracks = ["{", "}", "(", ")", "[", "]"];
    //remove non-bracket characters
    for (let i=0; i<input.length; i++) {
        for (let j=0; j<input.length; j++) {
            if (input[i] === bracks[j]) {
                trimmedString.push(input[i])
            }
        }; 
    }
    return trimmedString.join("");
 }