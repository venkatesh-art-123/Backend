import { useState } from "react";
import { registrationHooks, profileUpdateHooks } from "../action/userAction";
import { toast } from 'react-toastify';

function register() {
    const initiaState = {
        "name": "", "email": "", "password": ""
    }
    const [formVaue, setFormvaue] = useState(initiaState);
    const [file, setFile] = useState({})
    const { name, email, password } = formVaue;
    const handleChange = (e) => {
        try {
            const { id, value } = e?.target;
            setFormvaue({ ...formVaue, ...{ [id]: value } })
        } catch (e) {
            console.log("handleChange__Err", e)
        }
    }

    const handleFile = (e) => {
        console.log("e?.target?.value", e?.target, e?.target?.files[0])
        setFile(e?.target?.files[0])
    }

    const signUp = async (e) => {
        try {
            e?.preventDefault()
            let reqData = { name: name, email: email, password: password };
            const { status, result, message } = await registrationHooks(reqData);
            if (status) {
                localStorage.setItem("accessToken", message)
                toast.success(message, {
                    position: 'top-right', // Optional: override default position
                    autoClose: 3000,       // Optional: auto-close after 3 seconds
                });
            }

        } catch (e) {
            console.log("signUp__Err", e)
        }
    }

     const profileUpdate = async (e) => {
        try {
            e?.preventDefault()
            let formData = new FormData();
            formData.append("email", email)
            formData.append("attachment", file)
            const { status, result, message } = await profileUpdateHooks(formData);
            if (status) {
                localStorage.setItem("accessToken", message)
                toast.success(message, {
                    position: 'top-right', // Optional: override default position
                    autoClose: 3000,       // Optional: auto-close after 3 seconds
                });
            }

        } catch (e) {
            console.log("signUp__Err", e)
        }
    }
    return (
        <>
            <form>
                <label> userName : </label>
                <input type="text" id="name" onChange={(e) => handleChange(e)} />
                <br></br>
                <label> email : </label>
                <input type="text" id="email" onChange={(e) => handleChange(e)} />
                <br></br>
                <label> password : </label>
                <input type="text" id="password" onChange={(e) => handleChange(e)} />
                <br></br>
                <label> Fiel update</label>
                <input type='file' accept="image/*" onChange={(e) => handleFile(e)} />
                <button onClick={(e) => profileUpdate(e)}>Submit</button>
            </form>
        </>
    )
}

export default register;