// function arrays(arr){
//     // let sum =0;
//     for(let arrAdd of arr){
//         console.log(arrAdd);
//         // sum += arrAdd;

//     }
//     // return sum;

// }
// console.log(arrays([1,2,3,4,5]));

// MAx Value

// let max = Math.max(1, 21, 3, 42, 5);
// console.log("Max is :", max);

// Array MaxValue

function maxValues(maxNum){

    let maxValue = maxNum[0];

    for(let max of maxNum){
        if(maxValue < max){
            maxValue = max;
        }
    }
    return maxValue;
}
console.log(maxValues([2,44,33,7,10]));

// -----------
// function maxValues(maxNum) {
//     let maxValue = maxNum[0];
//     for (let max of maxNum) {
//         if (maxValue < max) {
//             maxValue = max;
//         }
//     }
//     return maxValue;
// }

// let input = prompt("(Ex: 2,44,33,7,10):");
// let numbers = input.split(",").map(Number);

// console.log("Max", maxValues(numbers));
