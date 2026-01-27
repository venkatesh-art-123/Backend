// Event loop 
// Promise.resolve().then(() => {
//     console.log("resove a promises")
// })

// process.nextTick(() => console.log("next Tick 1st"));
// // -------------------------------------------------------------------------------------------------
// MICROTASK
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

// // -----------------------------------------------------------------------------------------
// my own thinking
// process.nextTick(() => console.log("next Tick 1st"));

// process.nextTick(() => {
//     console.log("next Tick 2nd")
//   Promise.resolve().then(() => {

//     console.log("resolve the promises 3rd")
//     process.nextTick(() => console.log("promises inside the nextTick why its running after that the resolve the promises 3rd means it havecontroolled the promise queue"));
// })
// });

// Promise.resolve().then(() => console.log("resolve the promises 1st"));

// Promise.resolve().then(() => console.log("resolve the promises 2nd"))

