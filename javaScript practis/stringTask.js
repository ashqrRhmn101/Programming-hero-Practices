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

/*  Task-3:
Check whether a string contains all the vowels a, e, i, o, u  */
// vowel Count;
const vowel = "apple An orange a pen";
count = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for(let j = 0; j < vowel.length; j++)
{
    if(vowels.includes(vowel[j].toLowerCase()))
    {
        count++;
    }
}
console.log(count);

// Check whether
let a = vowel.includes("a");
let e = vowel.includes("e");
let i = vowel.includes("i");
let o = vowel.includes("o");
let u = vowel.includes("u");

if (a && e && i && o && u) {
  console.log("All vowels are present.");
} else {
  console.log("All vowels are NOT present.");
}



/*    */
