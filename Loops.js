// Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log("Number:", i);
    if (i === 10) {
        console.log("Loop finished");
    }
}
console.log("End of program");

// Sum of first 5 numbers

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log("Adding:", i);
}
console.log("Total Sum =", sum);
console.log("Program complete");

// Print elements of an array

let fruits = ["Apple", "Banana", "Grape", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}
console.log("Total fruits:", fruits.length);
console.log("Loop ended");