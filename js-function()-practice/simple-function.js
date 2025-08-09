function sum(x, y) {
  const result = x + y;
  console.log(result);
}
sum(20, 30);

// return value add

function sum2(a, b) {
  const total = a + b;
  return total;
}
const totals = sum2(10, 20);
console.log(totals);

// simple Square math

function square(number) {
  console.log("Value Number ", number);
  const ttl = number * number;

  return ttl;
  // console.log("Square value ", ttl);
}
const res = square(5);
console.log("Square value ", res);

// Double value

function doubleIt(nmbr) {
  const dbl = nmbr * 2;
  console.log("Number: ", nmbr + "\n" + "Ans: ", dbl);
}
doubleIt(5);
doubleIt(10);
doubleIt(15);

const money = 100;
doubleIt(money);

// space
console.log("-------NEXT-------");
// return value add
function tenTime(number1) {
  const result1 = number1 * 10;
  return result1;
}
tenTime(5);
const total1 = tenTime(5);
console.log(total1);

const total2 = tenTime(10);
console.log(total2);

//
console.log("-----Next Price Function----");
//

function add(price1, price2) {
  const total3 = price1 + price2;
  return total3;
}
const price = add(20, 20);
console.log(price);

//   OR--------
function add2(price1, price2) {
  return price1 + price2;
}
const price2 = add2(10, 20);
console.log(price2);

//
console.log("-----Next if else----");
//

function add3(a, b) {
  const sum3 = a + b;
  console.log(sum3);

  if (sum3 % 2 === 0) {
    console.log("even");
  } else {
    console.log("Odd");
  }
}
add3(3, 2);
