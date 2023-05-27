import React from "react";
import "./ModernPart.css";
import introPic from "../../assets/img/intro-dark.png";

const ModernPart = () => {
  return (
    <div className="bg-[#121217]">
      <div className="w-10/12 mx-auto flex py-24 items-center justify-between">
        <div className="intro-desc w-6/12">
          <h5>WELCOME TO YUMY</h5>
          <h2>We are a modern restaurant in the center of the city</h2>
          <p>
            From grilled Tandoori chicken burgers to simple chicken burgers with
            garlic rosemary mayonnaise, put a new twist on an old barbecue
            fYumyurite with these unique and chicken burger recipes.
          </p>
          <button>Look More</button>
        </div>
        <div className="w-6/12">
          <img className="w-full" src={introPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ModernPart;
