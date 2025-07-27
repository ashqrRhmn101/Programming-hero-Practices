// var sum = 10.210;
// sum += 20;

// var taka = 0.1;
// var dolor = parseFloat("0.2");

// var total = taka+dolor;

// console.log (total.toFixed(4));

// let money = 100;    // প্রথমে 100 টাকা
// console.log("শুরুতে টাকা:", money);

// money = money - 40; // 40 টাকা খরচ করলাম
// console.log("৪০ টাকা খরচের পরে:", money);

// money = money + 20; // আবার 20 টাকা পেলাম
// console.log("২০ টাকা পাওয়ার পরে:", money);

//  practice Problem 1
var totalMoney = 1000;

var orangePrice = 300;
var applesPrice = 400;

var sum = orangePrice + applesPrice;

var returns = totalMoney - sum;

console.log(returns);

//  practice Problem 2

// const math = 75.25, biology = 65, chemistry = 80, physics = 35.45, bangla = 99.50;

const math = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bangla = 99.5;

const total = math + biology + chemistry + physics + bangla;

const avg = total / 5;

console.log("Total Subject Average : ", avg.toFixed(2));

//  practice Problem 3

const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter number: ", (input) => {
//   const num = parseFloat(input);
//   const remainder = num % 5;
//   console.log("Remainder =", remainder);

//   rl.close();
// });

//  practice Problem 3
const num = 119;
const divide = num % 5;

console.log(divide);

const num = parseFloat(prompt("Enter number : "));
const remainder = num % 5;

console.log("ভাগশেষ =", remainder);
