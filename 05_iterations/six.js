const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    console.log(item);
    return item;
});

console.log(values); // undefined : for each won't return anything in this way

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.filter((num) => num > 4)

// let newNums = myNums.filter((num) => {
//   return num > 4
// })

const newNums = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);

const books = [
    {
        title: "Book One",
        genre: "Fiction",
        publish: 1981,
        edition: 2004,
    },
    {
        title: "Book Two",
        genre: "Non-Fiction",
        publish: 1992,
        edition: 2008,
    },
    {
        title: "Book Three",
        genre: "History",
        publish: 1999,
        edition: 2007,
    },
];

// const userBooks = books.filter((bk) => bk.genre === 'History')

const userBooks = books.filter((bk) => {
    return bk.publish >= 1990 && bk.genre === 'History';
});

console.log(userBooks);
