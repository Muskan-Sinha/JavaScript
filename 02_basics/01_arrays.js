// arrays

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "nagraaj"]
const myArr2 = new Array (1, 2, 3, 4)

console.log(myArr2[3]);

// Array methods

myArray.push(6)
myArray.push(7)
myArray.pop()

console.log(myArray);

myArray.unshift(9)
console.log(myArray);
myArray.shift()

console.log(myArray.includes(2));
console.log(myArray.indexOf(2));

const newArr = myArray.join() //changes into string
console.log(newArr);

