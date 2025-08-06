/* Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
['orange', 'yellow', 'green', 'blue', 'red']
 */

let colors = ["red", "blue", "green", "yellow", "orange"];

//without using the reverse method;

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }
// colors[1] = 'gray';
// console.log(colors);
