import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import FoodCategory from "./Components/FoodPages/Lunch";
import { createContext, useState } from "react";

import SignUp from "./Components/UserRegisterCommon/SignUp/SignUp";
import LogIn from "./Components/UserRegisterCommon/Login/LogIn";
import Footer from "./Components/Footer/Footer";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import BreakFast from "./Components/FoodPages/BreakFast";
import Lunch from "./Components/FoodPages/Lunch";
import Dinner from "./Components/FoodPages/Dinner";
import RequireAuth from "./Components/UserRegisterCommon/RequireAuth/RequireAuth";

export const FoodContext = createContext();

function App() {
  const [foods, setFoods] = useState([]);
  return (
    <div>
      <Navbar></Navbar>
      <FoodContext.Provider value={[foods, setFoods]}>
        <Routes>
          <Route path="/home" element={<HomePage></HomePage>}>
            <Route index element={<BreakFast></BreakFast>}></Route>
            <Route path="breakfast" element={<BreakFast></BreakFast>}></Route>
            <Route path="lunch" element={<Lunch></Lunch>}></Route>
            <Route path="dinner" element={<Dinner></Dinner>}></Route>
            <Route
              path="food-details/:details"
              element={
                <RequireAuth>
                  <FoodDetails></FoodDetails>
                </RequireAuth>
              }
            ></Route>
          </Route>

          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </FoodContext.Provider>

      <Footer></Footer>
    </div>
  );
}

export default App;
