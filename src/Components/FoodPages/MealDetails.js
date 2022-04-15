import React, { useContext, useEffect } from "react";
import { FoodContext } from "../../App";

const MealDetails = () => {
  const [foods, setFoods] = useContext(FoodContext);
  console.log(foods);

  useEffect(() => {
    fetch("foodsdata.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return <div></div>;
};

export default MealDetails;
