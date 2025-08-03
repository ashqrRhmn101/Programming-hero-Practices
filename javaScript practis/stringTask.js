/*   Task-1:
 Count how many times a string has the letter a */

const text = "I am a student and programmer";
let count = 0;

for (let x = 0; x < text.length; x++) {
  if (text[x] === "a") {
    count++;
  }
}
console.log(count);

/*  Task-2:
Count how many times a string has the letter a or A  */

const word = "I am A student and progrAmmer. An apple";
count = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i].toLowerCase() === "a") {
    count++;
  }
}
console.log(count);

/*    */

/*    */
