const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const other = 123.8966;
console.log(other.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

console.log(Math.round(4.55555));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 6, 7, 3, 9, 2, 5));
console.log(Math.max(4, 6, 7, 3, 9, 2, 5));
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min) + min);
