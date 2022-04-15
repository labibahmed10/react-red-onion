import React, { useContext, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { FoodContext } from "../../App";

const FoodRoutes = () => {
  return (
    <div>
      <div className="flex justify-center space-x-10 my-16 font-semibold text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400 underline underline-offset-4" : "text-sky-500"
          }
          to="/home/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400 underline underline-offset-4" : "text-sky-500 "
          }
          to="/home/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400 underline underline-offset-4" : "text-sky-500"
          }
          to="/home/dinner"
        >
          Dinner
        </NavLink>
      </div>
    </div>
  );
};

export default FoodRoutes;
