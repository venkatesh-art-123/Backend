// Although both crypto.pbkdf2 & http.request are asynchronous, http.request
// method does not seem to use the thread pool
// By noticing the average time while increasing the request
// MAX_LIMIT = 4, 6, & even 12
// so the thread pool doesn't involved

// Http.request does not seem to be affected by the number of
// CPU cores either

// NETWORK I/O
// http.request is a network input/output operation & not a cpu bound 
// operation 

// It does not use the thread pool

// Libuv instead delegates the work to the operating system kernel
// & whenever possible, it will poll the kernel & see if the request
// has completed 

// They are handled in two different ways
// 1. Native async mechanism 2.thread pool

// Whenver possible, Libuv will use native async mechanism in the OS so
// as to avoid blocking the main thread.
// Since the part of the kernel, there is different mechanism for each OS.
// Epoll for Linux, Kqueue for MacOs & IO completion port on Windows.


const https = require("node:https");
let MAX_LIMIT  = 12;
let start = Date.now()
for(let i=0; i<MAX_LIMIT; i++) {
https.request("https://www.google.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {Date.now() - start})
})
// res.end()
}

