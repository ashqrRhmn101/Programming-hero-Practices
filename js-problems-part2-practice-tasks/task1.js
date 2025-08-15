/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

*/
const heights2 = [167, 190, 120, 165, 137,20];

// console.log(Math.min(...heights2));
function minNumbers(heights2) {
  let min = heights2[0];

  for (const num of heights2) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

// console.log(minNumber(heights2));
const minNumber = minNumbers(heights2);
console.log("Min Number: ", minNumber);
