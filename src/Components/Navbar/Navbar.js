import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

import logo from "../../images/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-16 py-5 bg-[aliceblue]">
      <div>
        <img onClick={() => navigate("/home")} className="h-9" src={logo} alt="" />
      </div>
      <div className="flex items-center text-md space-x-8 ">
        <Link className="text-2xl" to="/cart">
          <BsCartPlus></BsCartPlus>
        </Link>
        <Link to="/login">LogIn</Link>
        <Link className="bg-[#F91944] px-5 py-1 text-white rounded-full" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
