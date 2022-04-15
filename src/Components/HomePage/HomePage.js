import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import FoodRoutes from "../FoodRoutes/FoodRoutes";
import "./HomePage.css";
import { FoodContext } from "../../App";

const HomePage = () => {
  const [foods, setFoods] = useContext(FoodContext);

  useEffect(() => {
    fetch("foodsdata.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div>
      <div className="background">
        <h1 className="text-5xl text-center pt-48">Best Food Waiting For Your Belly</h1>

        <div className="flex justify-center items-center mt-10">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for food items.."
            className="w-96 p-3 rounded-full focus:outline-0"
          />
          <input
            type="submit"
            className="bg-[#F91944] px-5 py-3 rounded-full text-white"
            value="Search"
          ></input>
        </div>
      </div>
      <FoodRoutes></FoodRoutes>
    </div>
  );
};

export default HomePage;
