// const num = parseFloat(prompt("Enter number : "));
// const remainder = num % 5;

// console.log("remainder =", remainder);

        //  Even & Odd
// const num = 10;

// if (num % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

        // for loop

// for (var x = 1; x <= 10; x++) {
//   // document.write("<h2>Hello</h2>");
//   document.write(" ", x);
// }


        // Odd number
for (var x = 1; x <= 20; x= x + 2) {
  document.write(" ", x);
}
        // even number

for(var x = 2; x<=20; x = x+2)
{
    document.write(x," <br>");
}
// negative
for(var x = 30; x>=2; x = x-2)
{
    document.write(" ");
    document.write(x);
}

// 1 to 10 = (total)

var sum=0, x;
for(x=1; x<=5; x++)
{
    sum += x;
}
 document.write("<br> Total = > \n", sum); 