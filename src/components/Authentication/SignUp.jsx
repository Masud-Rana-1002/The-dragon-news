
import NavMenu from "../Header/NavMenu";
import { Link } from "react-router-dom";

const SignUp = () => {
  
  return (
    <div className="bg-[#f3f3f3] ">
      <NavMenu></NavMenu>
      <div className="container w-11/12 mx-auto min-h-[calc(100vh-122px)]  flex items-center flex-col justify-center  ">
        <div className="bg-white w-2/5 mx-auto p-12 ">
          <h4 className="border-b-2 p-4 text-center text-4xl font-semibold">
          Register your account
          </h4>
          <form className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-[#403F3F] text-xl font-semibold">
                Your Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered bg-[#f3f3f3] text-[#9F9F9F] border-none"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-[#403F3F] text-xl font-semibold">
                Photo URL
                </span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your password"
                className="input input-bordered bg-[#f3f3f3] text-[#9F9F9F] border-none"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-[#403F3F] text-xl font-semibold">
                  Email address
                </span>
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
                <span className="label-text text-[#403F3F] text-xl font-semibold">
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered bg-[#f3f3f3] text-[#9F9F9F] border-none"
                // required
              />
            </div>
            <div className="flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <p className="text-xl font-semibold text-[#706F6F]">Accept Term & Conditions</p>
            </div>
            <div className="form-control mt-6">
              <input
                className="w-full bg-[#403F3F] py-4 text-white"
                type="submit"
                value="Register"
              />
            </div>
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
