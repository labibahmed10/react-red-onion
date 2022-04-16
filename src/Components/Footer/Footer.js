import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#161414] p-10  text-[#bfc3c7] text-sm">
      <div className="grid grid-cols-2 pb-20">
        <div>
          <img className="w-40" src={logo} alt="" />
        </div>

        <div className="flex justify-evenly ">
          <div className="leading-[1.5rem]">
            <p>All Online Food</p>
            <p>Read Our Blog</p>
            <p>Sign Up To Deliver</p>
            <p>Add Your Restaurent</p>
          </div>

          <div className="leading-[1.5rem]">
            <p>Get Help</p>
            <p>Read FAQ's</p>
            <p>View All Cities</p>
            <p>Restaurents Near Me</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <p>Copyright &copy; 2022 Onion Red by Labib Ahmed</p>
        <div className="flex space-x-10">
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
