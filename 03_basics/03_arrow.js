const user = {
    username: "Muskan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// this

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "Muskan"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "Muskan"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Muskan"
    console.log(this.username);
}

chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "Muskan" })

console.log(addTwo(3, 4));