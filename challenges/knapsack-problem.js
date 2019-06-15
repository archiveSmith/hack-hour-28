/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {

  let backpacks = [items];
  let posValues = [0];

  while(backpacks.length > 0)
  for(let i = backpacks.length - 1; i >= 0; i--) { // iterating in reverse to remove backpacks
    //console.log(backpacks[i].reduce((a, b) => a + b.weight, 0))
    if(backpacks[i].reduce((a, b) => a + b.weight, 0) <= weightAvailable) {
      posValues.push(backpacks[i].reduce((a, b) => a + b.value, 0));
      // want to remove backpack from possible backpacks
      backpacks.splice(i, 1);
      continue;
    }
    let newBackpacks = []
    console.log(backpacks);
    // else remove 1 of each item from backpack and create new possible backpacks.
    for(let j = 0; j < backpacks[i].length; j++) {
      let pack = backpacks[i].slice();
      pack.splice(j, 1);
      if(pack.length > 0) newBackpacks.push(pack);
    }
    console.log(newBackpacks);
    backpacks.splice(i, 1);
    backpacks = backpacks.concat(newBackpacks);
    console.log(backpacks)
  }
  //console.log(posValues)
  return Math.max(...posValues);

};
//const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

//console.log(solveKnapsack(items, 9));

module.exports = solveKnapsack;
