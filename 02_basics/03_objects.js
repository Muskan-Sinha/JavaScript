// Singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Muskan",
    "full name": "Muskan Kumari",
    [mySym]: "mykey1",
    age: 19,
    email: "muskan@gmail.com",
    location: "Bhopal",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "muskansinha@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "someoneelse@gmail.com"
console.log(JsUser.email);

JsUser.gretting = function () {
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser.gretting());