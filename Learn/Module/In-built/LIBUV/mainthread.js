// LIBUV
// Every method in nodejs that has "sync" suffix always
// runs on the main thread and is blocking

const start = Date.now()
const crypto = require("node:crypto")
crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
console.log("Hash i", Date.now() - start)