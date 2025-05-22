import { useEffect, useState } from "react";
import { findUser } from "../utils/storage";
import { generateToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../utils/auth";


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    ////////////////////////////////////////////////////////////////////////////////////////////


    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const isValid = verifyToken(token || "");
        if (token || isValid) {
            navigate("/profile");
        }
    }, []);


    ////////////////////////////////////////////////////////////////////////////////////////////


    const handleLogin = () => {
        const user = findUser(email, password);
        if (user) {
            const token = generateToken(user);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("currentUser", JSON.stringify(user));
            navigate("/profile");
        } else {
            alert("Invalid email or password");
        }
    };


    ////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <>
            <div className="p-6 pt-10">
                <h2 className="Rubik-medium text-3xl">Signin to your <br />PopX account</h2>
                <p className="Rubik-regular text-lg font-normal text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <form action="" className="mt-8">
                    <div className="relative">
                        <input value={email} autoComplete="email" onChange={(e) => setEmail(e.target.value)} type="text" id="email" aria-label="email" className="w-full h-12 rounded-lg bg-transparent border-2 px-5 Rubik-regular border-gray-300" placeholder="Enter email address" />
                        <label htmlFor="email" className="bg-[#F7F8F9] text-[#6e25ffd0] pl-1 pr-4 absolute -top-2 left-5 h-fit leading-4 Rubik-medium text-sm">Email Address</label>
                    </div>
                    
                    <div className="relative mt-6">
                        <input value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} type="text" id="password" aria-label="password" className="w-full h-12 rounded-lg bg-transparent border-2 px-5 Rubik-regular border-gray-300" placeholder="Enter password" />
                        <label htmlFor="password" className="bg-[#F7F8F9] text-[#6e25ffd0] pl-1 pr-4 absolute -top-2 left-5 h-fit leading-4 Rubik-medium text-sm"> Password<span className="text-[#F7F8F9]">000</span></label>
                    </div>

                    <button type="button" onClick={handleLogin} className="w-full bg-[#CBCBCB] Rubik-medium text-white text-base h-12 mt-5 rounded-lg cursor-pointer active:scale-95 duration-300">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login