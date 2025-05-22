import { Link } from "react-router-dom"


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function Auth() {
  return (
    <>
      <div className="p-6 pb-10 absolute bottom-0">
        <h2 className="Rubik-medium text-3xl">Welcome to PopX</h2>
        <p className="Rubik-regular text-lg font-normal text-gray-500 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        <Link to={'/register'} className="flex items-center justify-center w-full bg-[#6C25FF] text-white font-medium text-base h-12 mt-5 rounded-lg cursor-pointer active:scale-95 duration-300">Create Account</Link>
        <Link to={'/login'} className="flex items-center justify-center w-full bg-[#CEBAFB] text-black font-medium text-base h-12 mt-5 rounded-lg cursor-pointer active:scale-95 duration-300">Already Registered? Login</Link>
      </div>
    </>
  )
}

export default Auth