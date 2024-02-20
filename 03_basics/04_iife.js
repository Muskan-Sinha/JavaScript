// IIFE: Immediately Invoked Function Expression
// Global scope pollution
(function chai() {
    // named IIFE
    console.log(`DB connected`);
})();

// chai()

((name) => {
    console.log(`DB connected Two ${name}`);
})("Muskan")

/*
Js is single threaded
 JS Execution Context
Global EC is referred to `this` keyword
Function EC
Eval EC
Two phases
* memory creation phase : allocate memory for variables ; no operations performed
* execution phase : code executed , all operations performed

1st step: Global execution - This variable
2nd step: Memory Phase : all variables are assigned "undefined" and functions store their definition
3rd step: Execution Phase : actual values assigned to variables
            for functions : new executional context - new variable environment + execution thread
            Everytime we create a function there is a memory phase and execuion phase for that function

    ** Call Stack **

*/