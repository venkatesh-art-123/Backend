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