// The worker threads module enable the use fo thread 
// that execute js in parallel 

// Code executed in a worker thread runs in a seperate child process 
// preventing it from blocking your main application 

// THe cluster module can used to run multiple instance of Node.js 
// that can distribute workloads 

// THe worker_thread module allows running multiple application threads
// within a single NOdejs instance

const { parentPort } = require("node:worker_threads");


let j = 0
for (let i = 0; i < 6000000000; i++) {
    j++
};
parentPort.postMessage(j)
