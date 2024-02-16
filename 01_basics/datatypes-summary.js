// On the basis of memory allocation and access of data, data is categorised into 2 types: Primitive, Non-Primitive(Reference)

// Primitive: Call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// in js we never define the data type of any data, so it dynamically sets the data type of the
// data as we enter the data in the variable

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id === anotherid);
console.log(typeof 23n);

// Non- Primitive: Call by reference
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// all values in {} are Objects and we can store it in a variable as well

let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// ++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non-Primitive)

let myYtName = "MuskanSinha";

let anotherName = myYtName;
anotherName = "SinhaMuskan";

console.log(anotherName);
console.log(myYtName);

let userOne = {
  email: "muskansinha@mail.com",
  upiId: "user@paytm",
};

let userTwo = userOne;

userTwo.email = "Muskan@google.com";

console.log(userOne.email);
console.log(userTwo.email);
