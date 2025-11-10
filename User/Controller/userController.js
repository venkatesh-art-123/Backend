const UserTable = require("../Model/userModel");


const userRegistration = async (req, res) => {
    try {
        const { userName, email, password, age  } = req.body;
        let checkUser = await UserTable.findOne({ email: email });
        if (!checkUser) {
            let hashpassword = bcrypt()
            let createData = { userName: userName, email: email, password: hashpassword, age :āge };
            let saveData = await UserTable(createData);
            saveData.save();
            return res.status(200).json({ message: "user save successfully" })
        } else {
            return res.status(400).json({ message: "EmailId already exist" })
        }
    } catch (e) {
        console.log("userRegistration__Err", e)
    }
}


const userLogin = async (req, res) => {
    try {
        
    } catch (e) {
        console.log("userLogin__Err", e)
    }
}

module.exports = { userRegistration, userLogin }