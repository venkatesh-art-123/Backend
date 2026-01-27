

process.nextTick(() => console.log("next Tick 1st"));

process.nextTick(() => {
    console.log("next Tick 2nd")
    process.nextTick(() => console.log("next Tick 4th"));
});

Promise.resolve().then(() => console.log("resolve the promises 1st"));

Promise.resolve().then(() => {
    console.log("resolve the promises 2nd")
    process.nextTick(() => console.log("promises inside the nextTick why its running after that the resolve the promises 3rd means it havecontroolled the promise queue"));
})
Promise.resolve().then(() => console.log("resolve the promises 3rd"))

process.nextTick(() => console.log("next Tick 3rd"));


setTimeout(() => {
console.log("settimout 1")
}, 0)


setTimeout(() => {
console.log("settimout 2")
}, 0)


setTimeout(() => {
console.log("settimout 3")
}, 0)

// ------------------------------------------------------
//  Callbacks in microtask queue are executed in between the execution
// of callbacks in the timer queue.
// setTimeout(() => {
//     console.log("settimout 1")
// }, 0)


// setTimeout(() => {
//     console.log("settimout 2")
//     process.nextTick(() => {
//         console.log("This is the inner tick into the settimeout")
//     })

//     Promise.resolve().then(() => console.log("resolve the promises into settimout"))
// }, 0)


// setTimeout(() => {
//     console.log("settimout 3")
// }, 0)