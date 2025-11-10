const Jio = require('jio');
const { userSchema } = require('./schemaValidation');

const userValidation = async (req, res, next) => {
    try {
        const { error } = await userSchema.validate(req?.body);
        if (error) {
            return res.status(400).json({ error: error })
        } else {
            next()
        }

    } catch (e) {
        console.log("userValidation__Err", e)
    }
}


module.exports = { userValidation }