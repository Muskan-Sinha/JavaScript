let myName = "Muskan      "

console.log(myName.trim().length);

let myHeroes = ['thor', 'spiderman']


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.muskan = function () {
    console.log(`Muskan is present in all objects`);
}

Array.prototype.heyMuskan = function () {
    console.log(`Muskan says hello`);
}

heroPower.muskan()
myHeroes.muskan()

myHeroes.heyMuskan()
// heroPower.heyMuskan()

// inheritance

const user = {
    username: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode    '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Muskan".trueLength()