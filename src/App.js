import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import FoodCategory from "./Components/FoodPages/Breakfast";
import Lunch from "./Components/FoodPages/Lunch";
import Dinner from "./Components/FoodPages/Dinner";
import { createContext, useState } from "react";

import SignUp from "./Components/UserRegisterCommon/SignUp/SignUp";
import LogIn from "./Components/UserRegisterCommon/Login/LogIn";

export const FoodContext = createContext();

function App() {
  const [foods, setFoods] = useState([]);
  return (
    <div>
      <Navbar></Navbar>
      <FoodContext.Provider value={[foods, setFoods]}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}>
            <Route path=":category" element={<FoodCategory></FoodCategory>}></Route>
          </Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </FoodContext.Provider>
    </div>
  );
}

export default App;
