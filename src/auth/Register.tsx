'use client'
import { useEffect, useState } from 'react';
import { saveUser, isEmailTaken } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { verifyToken } from '../utils/auth';


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function Register() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "",
    });

    ////////////////////////////////////////////////////////////////////////////////////////////

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

    interface FormData {
        name: string;
        phoneNumber: string;
        email: string;
        password: string;
        companyName: string;
        agency: string;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////

    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

    ////////////////////////////////////////////////////////////////////////////////////////////

    const handleChange = (e: ChangeEvent) => {
        const { id, value, type, name } = e.target;
        const key = type === "radio" ? name : id;
        setFormData((prev: FormData) => ({ ...prev, [key]: value }));
    };

    ////////////////////////////////////////////////////////////////////////////////////////////

    const handleRegister = () => {
        const { name, phoneNumber, email, password, agency } = formData;
        if (!name || !phoneNumber || !email || !password || !agency) {
            alert("Please fill all required fields.");
            return;
        }

        if (isEmailTaken(email)) {
            alert("Email already exists. Try logging in.");
            return;
        }

        saveUser(formData);
        alert("Account created successfully!");
        navigate("/login");
    };

    ////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="p-6 h-full relative">
            <form action="" className="h-full relative flex flex-col justify-between">
                <div className="space-y-6">
                    <h2 className="Rubik-medium text-3xl mt-6 mb-8">Create your <br />PopX account</h2>

                    {/* Full Name */}
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full h-12 rounded-lg bg-transparent border-2 px-5 Rubik-regular border-gray-300"
                            placeholder="Your Full Name"
                            required
                        />
                        <div className="w-[6.7rem] h-1 absolute top-0 left-3 bg-[#F7F8F9]"></div>
                        <label htmlFor="name" className="text-[#6e25ffd0] px-1 absolute -top-2 left-3 h-fit leading-4 Rubik-medium text-sm">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                        <input
                            type="text"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full h-12 rounded-lg bg-transparent border-2 px-5 Rubik-regular border-gray-300"
                            placeholder="Enter Phone Number"
                            required
                        />
                        <div className="w-[6.7rem] h-1 absolute top-0 left-3 bg-[#F7F8F9]"></div>
                        <label htmlFor="phoneNumber" className="text-[#6e25ffd0] px-1 absolute -top-2 left-3 h-fit leading-4 Rubik-medium text-sm">
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="text"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-12 rounded-lg bg-transparent border-2 px-5 Rubik-regular border-gray-300"
                            placeholder="Enter email address"
                            required
                        />
                        <div className="w-[6.7rem] h-1 absolute top-0 left-3 bg-[#F7F8F9]"></div>
                        <label htmlFor="email" className="text-[#6e25ffd0] px-1 absolute -top-2 left-3 h-fit leading-4 Rubik-medium text-sm">
                            Email Address<span className="text-red-500">*</span>
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative mt-6">
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full h-12 rounded-lg bg-transparent border-2 px-5 Rubik-regular border-gray-300"
                            placeholder="Enter password"
                            required
                        />
                        <div className="w-[6.7rem] h-1 absolute top-0 left-3 bg-[#F7F8F9]"></div>
                        <label htmlFor="password" className="text-[#6e25ffd0] px-1 absolute -top-2 left-3 h-fit leading-4 Rubik-medium text-sm">
                            Password<span className="text-red-500">*</span>
                        </label>
                    </div>

                    {/* Company Name */}
                    <div className="relative">
                        <input
                            type="text"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full h-12 rounded-lg bg-transparent border-2 px-5 Rubik-regular border-gray-300"
                            placeholder="Your Company Name"
                        />
                        <div className="w-[6.7rem] h-1 absolute top-0 left-3 bg-[#F7F8F9]"></div>
                        <label htmlFor="companyName" className="text-[#6e25ffd0] px-1 absolute -top-2 left-3 h-fit leading-4 Rubik-medium text-sm">
                            Company Name
                        </label>
                    </div>

                    {/* Agency */}
                    <div className="relative">
                        <p className="Rubik-regular">Are you an Agency?<span className="text-red-500">*</span></p>
                        <div className="flex gap-2 items-center mt-2">
                            <input
                                type="radio"
                                id="agencyYes"
                                name="agency"
                                onChange={handleChange}
                                className="appearance-none w-5 checked:w-3 h-5 checked:h-3 border border-gray-300 rounded-full checked:border-transparent focus:outline-none checked:bg-[#6e25ffd0] checked:mx-1 checked:ring-1 checked:ring-[#6e25ffd0] checked:ring-offset-[3px]"
                                required
                            />
                            <label htmlFor="agencyYes" className="Rubik-medium text-sm">Yes</label>

                            <input
                                type="radio"
                                id="agencyNo"
                                name="agency"
                                onChange={handleChange}
                                className="appearance-none w-5 checked:w-3 h-5 checked:h-3 border border-gray-300 rounded-full checked:border-transparent focus:outline-none checked:bg-[#6e25ffd0] checked:mx-1 checked:ring-1 checked:ring-[#6e25ffd0] checked:ring-offset-[3px]"
                                required
                            />
                            <label htmlFor="agencyNo" className="Rubik-medium text-sm">No</label>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleRegister}
                    className="w-full bg-[#6C25FF] Rubik-medium text-white text-base h-12 mt-7 rounded-lg cursor-pointer active:scale-95 duration-300"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Register;