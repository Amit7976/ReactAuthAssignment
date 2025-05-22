"use client"
import { useEffect, useState } from "react";
import defaultImage from "../assets/default.png"
import { IoCameraSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../utils/auth";


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function Profile() {

    const navigate = useNavigate();
    const [user, setUser] = useState<{ name: string; email: string }>({ name: '', email: '' })


    ////////////////////////////////////////////////////////////////////////////////////////////


    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const userData = JSON.parse(sessionStorage.getItem("currentUser") || '{"name": ""}');
        setUser(userData);
        const isValid = verifyToken(token || '');
        if (!token || !isValid) {
            alert("Invalid or expired token. Please login again.");
            navigate("/login");
        }
    }, []);

    
    ////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <>
            <div className="pt-10">
                <div className="flex items-start gap-5 p-6">
                    <div className="w-1/4 relative">
                        <img src={defaultImage} alt="Profile Image" className="w-full aspect-square rounded-full" />
                        <IoCameraSharp className="text-white bg-[#4F1DB8] p-2 rounded-full w-7 h-7 absolute bottom-0 right-0" />
                    </div>
                    
                    <div>
                        <p className="Rubik-medium text-base text-black">{user.name}</p>
                        <p className="Rubik-medium text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>
                <p className="Rubik-medium text-sm text-gray-500 p-6 pt-2 border-b-2 border-dashed border-gray-300">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
        </>
    )
}

export default Profile
