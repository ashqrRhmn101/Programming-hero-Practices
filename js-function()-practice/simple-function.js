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

function square(number){
    console.log("Value Number ", number);
    const ttl = number * number ;

    return ttl;
    // console.log("Square value ", ttl);
}
const res = square(5);
console.log("Square value ", res);