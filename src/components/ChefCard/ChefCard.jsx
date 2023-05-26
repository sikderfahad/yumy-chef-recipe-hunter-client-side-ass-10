import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
import "./ChefCard.css";

const ChefCard = ({ chef }) => {
  const {
    id,
    ChefName,
    ChefPicture,
    Bio,
    Likes,
    NumberOfRecipes,
    YearsOfExperience,
  } = chef;

  const [like, setLike] = useState(false);

  const handledLike = () => {
    setLike(!like);
  };
  console.log(like);

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-[250px]"
          src={ChefPicture}
          alt=""
        />

        <div className="px-6 py-4">
          <h4 className="text-xl font-bold mb-2">{ChefName}</h4>
          <p className="text-gray-600 text-sm mb-2">
            Years of Experience: {YearsOfExperience}
          </p>

          <p className="text-gray-600 text-sm mb-4">
            Number of Recipes: {NumberOfRecipes}
          </p>
          <div className="flex justify-between">
            <span className="text-blue-600 flex items-center gap-2 text-lg">
              <span onClick={handledLike}>
                {!like ? (
                  <BiLike className="text-xl" />
                ) : (
                  <AiTwotoneLike className="text-xl" />
                )}
              </span>
              {!like ? Likes : Likes + 1}
            </span>

            <Link to={`/chef-recipes/${id}`}>
              <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Recipes →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
