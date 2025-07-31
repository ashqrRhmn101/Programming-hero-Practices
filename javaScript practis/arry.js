let num = [1, 2, 3, 10, 20, 66, 3, 4, 10, 20];
console.log(num);

const fruits = ["mango", "apple", "Banana"];
console.log(fruits);

console.log(fruits.length); // koit index er ( upadan ache ta dekhay) // Output : 3 ;

const add = fruits.push("orange"); // item add kore
console.log(fruits);

const out = fruits.pop(); // out item
console.log(fruits);

console.log(fruits.includes("apple")); // *important ( Find item );  Output : true
// const find = fruits.includes("Banana");
console.log(fruits.indexOf("Banana")); // *important ( koto nmbr index e ache ) Output: 2

console.log(Array.isArray(fruits)); // check array; Output : true

