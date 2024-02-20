function sayMyName() {
    console.log("M");
    console.log("U");
    console.log("S");
    console.log("K");
    console.log("A");
    console.log("N");
}

sayMyName() // Function reference : sayMyName , execution : ()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, "5") = 35
// addTwoNumbers(3, 5) = 8
// addTwoNumbers(3, null) = 3
// addTwoNumbers(3, "a") = 3a


function addTwoNumbers(number1, number2) {
    return number1 + number2
}

const result = addTwoNumbers(3, 4)
console.log(result);

function loginuserMessage(username = "sam") {
    if (username === undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginuserMessage());

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(2, 4, 6, 8));

const user = {
    username: "Muskan",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Muskan",
    price: 199
})

const myNewArray = [100, 200, 300, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([100, 200, 300, 500]));
// console.log(returnSecondValue(myNewArray));