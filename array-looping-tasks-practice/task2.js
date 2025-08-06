// let colors = ["red", "blue", "green", "yellow", "orange"];
// let des = "Pursing Computer Science and Engineering at American International University-Bangladesh"
// let num = [1,2,3,4,6,546,78,978,74,10]
// if(num.includes(4)){
//     console.log("ache");
// }
// else{
//     console.log("nai");
// }
/*
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]  */

const numbers = [12, 98, 5, 41, 23, 78, 46];

for (let i = 0; i <= numbers.length; i++) {
  // console.log(numbers[i]);
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}
