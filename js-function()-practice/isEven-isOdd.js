// isEven & isOdd

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(10));

// ---------
console.log("-----isOdd------");
// isOdd return value

function isOdd(number){
    if(number%2 === 1){
        console.log(number);
        return true;
    }
    else{
        console.log(number);
        return false;
    }
}
console.log(isOdd(5))
console.log(isOdd(4))
console.log(isOdd(98))
