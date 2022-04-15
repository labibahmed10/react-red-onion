import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Common = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("foodsdata.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};

export default Common;
