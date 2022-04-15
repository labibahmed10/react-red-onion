import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FoodContext } from "../../App";
const Breakfast = () => {
  const location = useLocation();
  const breakfastFood = location?.pathname.slice(1, 20);
  console.log(breakfastFood);
  const [foods, setFoods] = useContext(FoodContext);
  console.log(foods);

  return (
    <div>
      {foods.map((item) => {
        if (item?.code === breakfastFood) {
          return <Filtered item={item}></Filtered>;
        }
      })}
    </div>
  );
};

const Filtered = ({ item }) => {
  const { image, name, price } = item;
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Breakfast;
