const Jio = require('jio');

const userSchema = await Jio.object({
            userName : Jio.string().required(),
            email : Jio.email().required(),
            password : Jio.string().pattern(new RegExp()).required,
            age : Jio.number().integer().min(18).max(100).optional()
        });


module.exports = { userSchema }