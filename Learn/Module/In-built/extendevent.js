const EventEmitter = require("node:events");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("data", (number) => {
//     console.log("console.log", number)
// });

// eventEmitter.emit("data", 23)

class orderEmitter extends EventEmitter {

    constructor() {
        super();
    }

    receivingOrder() {
        this.on("orderPlaced", (data) => {
            console.log("receiveing Order ID", data)
        })
    }

}

const orderPlace = new orderEmitter();
orderPlace.receivingOrder()
orderPlace.emit("orderPlaced", "2342234");

orderPlace.receivingOrder();
orderPlace.emit("orderPlaced", "999999");


// const eventEmitter = require("events");

// class orderEmitter extends eventEmitter {

//     constructor() {
//         super() // we access the parent constructor
//         this.on("orderplacing", (orderID) => {
//             console.log("receiving orderId", orderID)
//         })
//     }

//     receiveOrder(data) {
//         this.emit("orderplacing", data)
//     }

// }

// let emitter = new orderEmitter;

// emitter.receiveOrder("63456344");

// emitter.receiveOrder("634563422")



