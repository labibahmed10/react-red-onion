import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import CommonSignIn from "../CommonSignIn/CommonSignIn";

const SignUp = () => {
  return (
    <div className="w-[28rem] mx-auto">
      <div>
        <img className="w-56 object-contain mx-auto mt-24" src={logo} alt="" />
      </div>

      <div className="mt-12 px-8">
        <form action="">
          <input className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto" type="text" placeholder="Name" />

          <input className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto" type="email" placeholder="Email" />

          <input
            className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto"
            type="password"
            placeholder="Confirm Password"
          />

          <input type="submit" className="w-full bg-[#F91944] py-3 my-2 text-[aliceblue]" />

          <p className="text-center text-[#F91944]">
            Already Have an Account?{" "}
            <Link className="hover:underline" to="/login">
              LogIn
            </Link>
          </p>
        </form>
      </div>
      <CommonSignIn></CommonSignIn>
    </div>
  );
};

export default SignUp;
