// A function passed an argument in another function is known as callback.
// ChatGPT 
// A function that is passed as an argument to another function is called a callback function.

function greet(name) {
    console.log(`Hello ${name}`)
}

// Any function accepts an arguments another function & return a function is called highorder function.
// ChatGPT 
// A higher-order function is a function that accepts another function as an argument OR returns a function.
function higherOrderFunction(callback) {
    let name = "venkatesh"
    callback(name)
}

higherOrderFunction(greet)

// Example 
// arr.map(el => el * 2);

// why need a callback function
// A callback which is executed immeditely is called as synchronous callback 