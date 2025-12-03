//1. For Loop

for (let i = 1; i <= 10; i++) {
  if (i > 5) {
    console.log("Number > 5 :", i);
  }
}

console.log("For loop completed!");

//2. While Loop (with condition inside)

let i = 1;

while (i <= 10) {
  if (i === 7) {
    console.log("Stopping at 7!");
    break;
  }

  console.log("Current number:", i);
  i++;
}

console.log("While loop finished!");

//3. Do-While Loop :

let x = 1;

do {
  if (x === 5) {
    x++;
    continue;
  }

  console.log("Value:", x);
  x++;
} while (x <= 10);

console.log("Do-while loop ended!");

//Lexical scope:
// A function can access variables from its outer (parent) function.

//Example:

function outer() {
  let a = 10;
  function inner() {
    console.log(a); // inner can access outer variable
  }
  inner();
}
outer();

// Closure :-
// When a function remembers the variables from its
// outer scope even after the outer function is finished.

//Example:

function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  };
}

let fun = outer();
fun(); // still prints 10 even though outer() is finished

function datas() {
  let number = 0;
  function add() {
    console.log(number);
  }
  return add;
}

const show = datas();

show();

const createAcc = () => {
  let balance = 1000; // private variable

  const deposit = (amount) => {
    balance += amount;
    console.log("Balance:", balance);
  };

  const withdraw = (amount) => {
    balance -= amount;
    console.log("Balance:", balance);
  };

  return { deposit, withdraw };
};

const acc = createAcc();
acc.deposit(500); // can access balance
acc.withdraw(300);
acc.balance = 300;
0;
acc.deposit(100);
