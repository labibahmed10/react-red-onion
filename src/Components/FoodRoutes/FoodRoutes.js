import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Breakfast from "../FoodPages/Breakfast";
import Common from "../FoodPages/Common";
import Dinner from "../FoodPages/Dinner";
import Lunch from "../FoodPages/Lunch";

const FoodRoutes = () => {
  return (
    <div>
      <div className="flex justify-center space-x-10 my-16 font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400 underline underline-offset-4" : "text-sky-500"
          }
          to="breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-400 underline-offset-4" : "text-sky-500 ")}
          to="lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-400 underline-offset-4" : "text-sky-500")}
          to="dinner"
        >
          Dinner
        </NavLink>
      </div>
      <div className="h-[85vh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default FoodRoutes;
