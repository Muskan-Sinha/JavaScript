const accId = 144553;
let accEmail = "muskan@google.com";
var accPass = "12345";
accCity = "Jaipur";
let accState;
// accId = 2
// prefer to not use var bcoz of issue in block scope and functional scope

accEmail = "asd@gmail.com";
accPass = "43232";
accCity = "Pune";
console.log(accId);
console.log(accPass);
console.log(accEmail);
console.log(accCity);
console.table([accEmail, accId, accPass, accCity, accState]);