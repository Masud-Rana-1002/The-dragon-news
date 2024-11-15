import React from "react";
import NavMenu from "../Header/NavMenu";
import { Link } from "react-router-dom";

const Signin = () => {
  const login =(e)=>{
    e.preventDefault() 
const form = new FormData (e.target) 
const email = form.get('email')
const password = form.get('password')

  }
  return (
    <div className="bg-[#f3f3f3] ">
        <NavMenu></NavMenu>
      <div className="container w-11/12 mx-auto min-h-[calc(100vh-122px)]  flex items-center flex-col justify-center  ">
        <div className="bg-white w-2/5 mx-auto p-16 ">
          <h4 className="border-b-2 p-4 text-center text-4xl font-semibold">Login your account</h4>
          <form onSubmit={login} className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-[#403F3F] text-xl font-semibold">Email address</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered bg-[#f3f3f3] text-[#9F9F9F] border-none"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#403F3F] text-xl font-semibold">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered bg-[#f3f3f3] text-[#9F9F9F] border-none"
                // required
              />
             
            </div>
            <div className="form-control mt-6">
            <input className="w-full bg-[#403F3F] py-4 text-white" type="submit" value="Login" />
            </div>
            <div>
              <p className="text-center font-semibold">Dont’t Have An Account ?<span className="text-[#F75B5F]"><Link to='/signUp'> Register</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
