function modemean(array) {
  //Use reduce to save elements of array into an object and save the object to a variable
  let counterObj = array.reduce(function(acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }