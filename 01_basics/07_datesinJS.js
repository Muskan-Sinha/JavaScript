// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 9, 5)
console.log(myCreatedDate.toDateString());

let date1 = new Date("2023-01-14")
console.log(date1.toLocaleString());

let date = new Date("01-14-2023")
console.log(date.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);

console.log(date1.getTime());
console.log(Math.floor(Date.now() / (1000)));

let newDate = new Date()
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));