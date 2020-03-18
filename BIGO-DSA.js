//1. O(1)  O(n)


//2.O(1)


//3. O(n^2) because it requires a nested look


//4.O(n) for the


//5. O(n) iterates the array once to find the correct item


//6.O(n^2) because there is a nested loop that would require 2 levels of looping over an input


//7.O(n) linear time // creates an array using fib sequence


//8.O(log n) the smaller the index gets after each iteration


//9. O(1) - Linear function, returns arr. 


//10.O(n) - n determine the time taken


//11.

let count = 0;
function solveHanoi(disks, origin, temp, destination){
  if (disks === 1){
    console.log(`${disks} moving ${origin} -> ${destination} count:${++count}`)
  }
  else{
    solveHanoi(disks - 1, origin, destination, temp);
      console.log(`${disks} moving ${origin} -> ${destination} count: ${++count}`);
  solveHanoi(disks - 1, temp, origin, destination)
  }

}
console.log(solveHanoi(5, 'a', 'b,', 'c'))


//#11 - 1
// After 7 recursive calls, 2 largest disks will be on A and 3 smallest disks will be on B.


//#11 -2
// 3 disks = 7 moves
// 4 disks = 15 moves
// 5 disks = 31 moves

// #11 - 3 
// Big O: Exponential time 0(2^n - 1)