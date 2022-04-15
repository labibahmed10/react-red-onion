import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import CommonSignIn from "../CommonSignIn/CommonSignIn";

const LogIn = () => {
  return (
    <div className="w-[28rem] mx-auto">
      <div>
        <img className="w-56 object-contain mx-auto mt-24" src={logo} alt="" />
      </div>
      <div className="mt-12 px-8">
        <form action="">
          <input className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto" type="email" placeholder="Email" />

          <input
            className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto"
            type="password"
            placeholder="Password"
          />

          <input type="submit" className="w-full bg-[#F91944] py-3 my-2 text-[aliceblue]" />

          <p className="text-center text-[#F91944]">
            New in Red Onion?{" "}
            <Link className="hover:underline underline-offset-1" to="/signup">
              Sign Up for free
            </Link>
          </p>

          <p className="text-center mt-1 mb-2 text-[#F91944]">
            <button className="hover:underline underline-offset-1">Forgot Your Password?</button>
          </p>
        </form>

        <CommonSignIn></CommonSignIn>
      </div>
    </div>
  );
};

export default LogIn;
