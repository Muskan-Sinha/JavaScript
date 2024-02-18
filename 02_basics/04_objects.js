// const tinderUser = new Object() - singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullnamee: {
            firstname: "Muskan",
            lastname: "Kumari"
        }
    }
}

console.log(regularUser.fullname.userfullnamee.firstname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 =  {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com" 
    }
]

users[0]