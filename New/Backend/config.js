// require('dotenv').config({ path : `./Environment./.env.${process.env.NODE_ENV}`});
require('dotenv').config({ path : `./Environment/.env.${process.env.NODE_ENV}`})
console.log("processsssss", process.env.NODE_ENV);


var SECRET_KEY = {}

SECRET_KEY.PORT = process.env.PORT
SECRET_KEY.MONGOURI = process.env.MONGOURI
SECRET_KEY.SECRET_KEY = process.env.SECRET_KEY

export default SECRET_KEY;