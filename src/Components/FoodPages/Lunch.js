import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import { FoodContext } from "../../App";
import SingleFood from "./SingleFood";

const Lunch = () => {
  const [foods, setFoods] = useContext(FoodContext);
  const { category } = useParams();
  const filtered = foods.filter((item) => item.category === "lunch");
  return (
    <div>
      <div className="grid grid-cols-3 place-items-center gap-10">
        {filtered.map((item) => (
          <SingleFood key={item.id} item={item}></SingleFood>
        ))}
      </div>

      <button className="block mx-auto my-16 py-3 px-4 text-[aliceblue] rounded-2xl bg-[#F91944]">
        Checkout Your Food
      </button>
    </div>
  );
};

export default Lunch;
