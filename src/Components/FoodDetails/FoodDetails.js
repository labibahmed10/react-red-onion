import React, { useContext } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { FoodContext } from "../../App";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CarouselSlide from "../Carousel/CarouselSlide";

const FoodDetails = () => {
  const [foods, setFoods] = useContext(FoodContext);
  const { details } = useParams();
  const food = foods.find((item) => item.id === +details);
  console.log(food);

  return (
    <div>
      <div className="flex px-36 pb-16 gap-3 justify-between">
        <div className="w-[45rem]">
          <h1 className="text-5xl font-semibold py-8">{food?.name}</h1>
          <h2 className="leading-[2rem] text-gray-500">{food?.text}</h2>

          <div className="my-4 flex ">
            <h4 className="text-4xl font-semibold pr-16">${food?.price}</h4>

            <div className="flex items-center space-x-4 px-3 py-2 border-2 rounded-full">
              <AiOutlineMinus className="hover:text-[#F91944]"></AiOutlineMinus>
              <p>0</p>
              <AiOutlinePlus className="hover:text-[#F91944]"></AiOutlinePlus>
            </div>
          </div>

          <button className="px-4 py-2 mt-2 bg-[#F91944] rounded-full text-[aliceblue]">Add to Cart</button>

          <CarouselSlide></CarouselSlide>
        </div>

        <div>
          <img className="w-3/4 mx-auto" src={food?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
