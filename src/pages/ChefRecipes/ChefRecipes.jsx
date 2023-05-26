import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { GiCook } from "react-icons/gi";
import { FaAward, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { MdFavoriteBorder } from "react-icons/md";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";

const ChefRecipes = () => {
  const chefInfo = useLoaderData();
  const [like, setLike] = useState(false);

  const addToFavourite = () => {
    setLike(!like);
    !like && ToastMsgSuc("This Chef added to your Favourite list!");
  };

  const {
    ChefPicture,
    ChefName,
    Bio,
    YearsOfExperience,
    NumberOfRecipes,
    Likes,
    Specialty,
    Recipes,
  } = chefInfo;

  console.log(chefInfo);

  return (
    <div className="bg-[black] py-[150px]">
      <div className="w-10/12 mx-auto  ">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl p-5">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={ChefPicture}
                alt={ChefName}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {Specialty}
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                {ChefName}
              </h2>
              <p className="mt-2 text-gray-500">{Bio}</p>
              <div title="likes" className="mt-4 w-fit flex items-center">
                <FcLike className="text-xl"></FcLike>
                <span className="ml-2 text-gray-700">{Likes}</span>
              </div>
              <div
                title="Number of Recipes"
                className="mt-4 flex w-fit items-center"
              >
                <GiCook className="text-xl"></GiCook>
                <span className="ml-2 text-gray-700">{NumberOfRecipes}</span>
              </div>
              <div
                title="Years of Experience"
                className="mt-4 flex w-fit items-center"
              >
                <FaAward className="text-xl text-rose-500"></FaAward>
                <span className="ml-2 text-gray-700">
                  {YearsOfExperience} years of experience
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 mx-auto">
            <h3 className="text-lg recipe-title leading-6 font-medium text-gray-900">
              Recipes
            </h3>
            <table className="w-full mt-2">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Recipe Name</th>
                  <th className="py-2 px-4 border-b">Ingredients</th>
                  <th className="py-2 px-4 border-b">Cooking Method</th>
                  <th className="py-2 px-4 border-b">Rating</th>
                </tr>
              </thead>
              <tbody>
                {Recipes.map((recipe, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{recipe.RecipeName}</td>
                    <td className="py-2 px-4 border-b">
                      {recipe.Ingredients.join(", ")}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {recipe.CookingMethod}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <Rating
                        className="fs-5"
                        placeholderRating={recipe.Rating}
                        emptySymbol={
                          <FaRegStar style={{ color: "#FF8C47" }}></FaRegStar>
                        }
                        placeholderSymbol={
                          <FaStar style={{ color: "#FF8C47" }}></FaStar>
                        }
                        fullSymbol={
                          <FaStar style={{ color: "#FF8C47" }}></FaStar>
                        }
                        readonly
                      />
                      {recipe.Rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right">
            <button
              onClick={addToFavourite}
              className="mt-4 flex items-center gap-2"
            >
              Favourite
              <MdFavoriteBorder
                className={`text-5xl font-thin duration-500 ${
                  like
                    ? "text-rose-500  rotate-[360deg] scale-125"
                    : "text-gray-500"
                }`}
              ></MdFavoriteBorder>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to={"/"}>
          <button className="text-[#3291ff] text-xl btn-other-signup-option w-fit mx-auto ">
            ← Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefRecipes;
