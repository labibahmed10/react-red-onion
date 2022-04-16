import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FoodContext } from "../../App";
import FoodRoutes from "../FoodRoutes/FoodRoutes";

const FoodDetails = () => {
  const [foods, setFoods] = useContext(FoodContext);
  // const location = useLocation();
  // const product = location.pathname.slice(6, 20);
  // console.log(foods);
  const { details } = useParams();
  console.log(foods);

  return (
    <div>
      <FoodRoutes></FoodRoutes>
      <div>
        {foods.filter((item) => {
          if (item.id === +details) {
            return <FoodDetail item={item}></FoodDetail>;
          }
        })}
      </div>
    </div>
  );
};

const FoodDetail = ({ item }) => {
  const { text, name } = item;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default FoodDetails;
