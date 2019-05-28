/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

//log(n) solution
function findInOrderedSet(arr, target) {
   let left = arr[0];
   let right = arr.length - 1;
   let mid = Math.floor((left + right) / 2)

   while(arr[mid] !== target && left < right)
   {
     if(target < arr[mid])
     {
       right = mid - 1;
     }
     else
     {
       left = mid + 1
     }
      mid = Math.floor((left + right) / 2);
   }
   return (arr[mid] === target) ? true : false;
}

//var nums = [1, 4, 6, 7, 9, 17, 45]
//console.log(findInOrderedSet(nums, 4));  //-> true
//console.log(findInOrderedSet(nums, 2));  //-> false



module.exports = findInOrderedSet;
