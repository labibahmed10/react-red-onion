import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Breakfast from "./Components/FoodPages/Breakfast";
import Lunch from "./Components/FoodPages/Lunch";
import Dinner from "./Components/FoodPages/Dinner";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="lunch" element={<Lunch></Lunch>}></Route>
        <Route path="dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
