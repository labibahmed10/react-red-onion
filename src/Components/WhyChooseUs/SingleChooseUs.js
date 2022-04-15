import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SingleChooseUs = ({ item }) => {
  const { image, text, special } = item;
  return (
    <div className="shadow-md p-1 rounded-md h-[29rem]">
      <img src={image} alt="" />
      <div className="px-5 text-justify ">
        <h2 className="py-3 font-semibold">{special}</h2>
        <p className="text-sm text-gray-600">{text}</p>
        <button className="text-blue-400 flex items-center pt-2">
          See More
          <BsFillArrowRightCircleFill className="text-green-500 ml-1 mt-1"></BsFillArrowRightCircleFill>
        </button>
      </div>
    </div>
  );
};

export default SingleChooseUs;
