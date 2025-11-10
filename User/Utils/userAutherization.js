const { SECRET_KEY } = require("../../Config");


const userAuthorization = async (req, res) => {
    try {
        let auth = req.headers['Authorization'];
        let token = auth.split(' ')[1];
        let verifyToken = jwt.verify(token);
        
    } catch (E) {

    }
};

const createAuthorizationTok = async (req, res) => {
    try {
        let createtok = jwt.sign({}, SECRET_KEY);
        

    } catch (e) {

    }
}
module.exports = { userAuthorization, createAuthorizationTok }