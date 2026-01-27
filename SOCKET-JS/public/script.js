

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("connection is establised")
})


const container = document.getElementById("list-container")
const ul = document.createElement("ul");
ul.setAttribute("list", "li-cont");
container.appendChild(ul)

let formData = document.getElementById("form-message");
formData.addEventListener('submit', (e) => {
    e?.preventDefault()
    let value = document.getElementById("message").value
    console.log("formDatga_va", value)
    socket.emit("new-messages", value)
})


socket.on("receive-message", (message) => {
    console.log("received messages", message)
    const li = document.createElement('li')
    li.textContent = message;
    ul.appendChild(li)
})