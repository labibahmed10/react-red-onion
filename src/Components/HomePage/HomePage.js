import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
