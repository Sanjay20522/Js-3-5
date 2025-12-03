// 1. Shallow Copy in JavaScript

// A shallow copy copies only the first level of an object/array.
// If the object contains nested objects, the copy will share the same references.

// Common ways to create a shallow copy:

// Spread operator (...)

// Object.assign()

// Array.slice()

// Array.from()



// ---

// Shallow Copy (Array)

let arr1 = [1, 2, [3, 4]];
let arr2 = [...arr1];  // Shallow Copy

arr2[2][0] = 100;

console.log(arr1); // [1, 2, [100, 4]]  → changed
console.log(arr2); // [1, 2, [100, 4]]


// Shallow Copy (Object)

let obj1 = {
  name: "Sanjay",
  marks: { tamil: 90, english: 80 }
};

let obj2 = { ...obj1 }; // Shallow Copy

obj2.marks.tamil = 100;

console.log(obj1.marks.tamil); // 100 → changed


//  2. Deep Copy in JavaScript

// A deep copy copies all levels of an object/array.
// Nested objects get new memory, so changes won’t affect the original.

// Common ways to create a deep copy:

// structuredClone() (recommended)

// JSON.parse(JSON.stringify(obj)) (old method)

// Manual recursion (advanced)


// Deep Copy (Using structuredClone – best way)

let arr = [1, 2, [3, 4]];
let arr2 = structuredClone(arr); // Deep copy

arr2[2][0] = 100;

console.log(arr1); // [1, 2, [3, 4]] → unchanged
console.log(arr2); // [1, 2, [100, 4]]


// Deep Copy (Object)

let obj = {
  name: "Sanjay",
  marks: { tamil: 90, english: 80 }
};

let obj2 = structuredClone(obj);

obj2.marks.tamil = 100;

console.log(obj1.marks.tamil); // 90 → unchanged