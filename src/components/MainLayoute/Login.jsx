import React from "react";

const Login = () => {
  return (
    <div className="*:w-full space-y-3 ">
      <p className="text-3xl font-bold mb-4">Login With</p>
        <button className="border border-[#2c5ca8] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#2c5ca8] hover:bg-gray-50 transition-all duration-200">
          <img
            src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
            alt="google logo"
            className="w-[23px]"
          />
          Sign in with Google
        </button>
        <button
                className=" border border-[#303030] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#303030] hover:bg-gray-50 transition-all duration-200">
                <img  src="https://i.ibb.co/w4xtRf9/download-10-removebg-preview.png" alt="Github logo"
                     className="w-[35px] bg-black rounded-full"/>
                Sign in with Github
            </button>
   
    </div>
  );
};

export default Login;
