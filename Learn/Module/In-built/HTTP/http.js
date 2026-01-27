const http = require("http");

// Cilent to send any request we see this data into the callback function
const server = http.createServer((req, res) => {
  let contentText = { "Content-Type" : "text/plain"}
  let contentJSON = { "Content-Type" : "application/json"}
  let json = {
    firstName : "venkatesh",
    lastName : "JJ"
  }
  res.writeHead(200, contentJSON);
  res.end(JSON.stringify(json)
);
});


server.listen(4000, () => {
    console.log("server running in port 3000")
})





