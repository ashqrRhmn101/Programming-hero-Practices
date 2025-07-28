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

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 75;
let myFriendScore = 80;

if (myScore > 80) {
  if (myFriendScore >= 80) {
    console.log("Go for a lunch");
  }
  if (myFriendScore >= 60) {
    console.log("Good luck");
  } else if (myFriendScore >= 40) {
    console.log("My friend's message unseen");
  } else {
    console.log("block your friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}


/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 21;
let num2 = 20;


let result= (num1>num2) ? (num1*2) : (num1+num2);

// if(num1>num2)
// {
//     result = num1*2;
// }
// else
// {
//     result= num1+num2;
// }

console.log("Result = ", result);


//  Next Work
const isPassed = false;

// if(isPassed === false)
if(!isPassed)   // ( ! )true kore feleche; (!!) 2ta mane false
{
    console.log("Fail")
}
else{
    console.log("Good job")
}


let price = 800;
const isLeader = false;
// if(isLeader === true)
// {
//     if(price > 1000)
//     {
//         price = price /2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price +100;
// }

price = isLeader===true ? price > 1000 ? price/2 : 0 : price + 100;

console.log("Price = ", price);