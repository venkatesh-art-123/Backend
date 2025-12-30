const { Duplex } = require("stream")


class MyDuplex extends Duplex {

    constructor() {
        super()
        this.arr = ["ven", "din", "pra", "kam"]
    }


    _read(size) {
        const chunk = this.arr.shift();
        console.log("chunk_Data", chunk)
        if (chunk) {
            this.push(chunk)
        } else {
            this.push(null)
        }

    }

    _write(data, enc, cb) {
        console.log("receiving data", data.toString())
        cb()
    }
}

const DuplexInstance = new MyDuplex()


DuplexInstance.write("Hello i am ven")

DuplexInstance.on('data', (chunk) => {
    console.log("DuplexInstance chunk", chunk.toString())
})
DuplexInstance.end()