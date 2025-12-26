const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order-delay", (data) => {
    console.log(`${data} is received`)
});

emitter.on("order-delay", (data) => { // listener
    console.log(`${data} is received`)
});

console.log("Doesnt affected the event occur in the system")

emitter.emit("order-delay", "Pizza"); // Trigger 