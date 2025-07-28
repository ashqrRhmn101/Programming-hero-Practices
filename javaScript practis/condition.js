/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let burger = 500;

if (burger > 500) {
  console.log("Free Drinks");
} else {
  console.log("Drinks Price 30TK");
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const BMI = 24.9;
if (BMI < 18.5) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are Normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are Overweight");
} else {
  console.log("You are obese");
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let mark = 60;

if (mark >= 90 && mark <= 100) {
  console.log("A");
} else if (mark >= 80 && mark <= 89) {
  console.log("B");
} else if (mark >= 70 && mark <= 79) {
  console.log("C");
} else if (mark >= 60 && mark <= 69) {
  console.log("D");
} else {
  console.log("F");
}
