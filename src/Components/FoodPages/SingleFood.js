import React from "react";

const SingleFood = ({ item }) => {
  const { name, text, price, image } = item;
  return (
    <div className="text-center cursor-pointer px-4 py-3 duration-300 hover:shadow-xl ">
      <img className="w-48 mx-auto" src={image} alt="" />
      <h1 className="font-semibold pt-1 text-xl">{name}</h1>
      <p className="text-sm text-gray-400 py-1">{text}</p>
      <p className="text-[1.15rem] font-semibold">${price}</p>
    </div>
  );
};

export default SingleFood;
