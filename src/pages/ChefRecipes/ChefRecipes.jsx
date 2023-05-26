import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const chefInfo = useLoaderData();

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
              <div className="mt-4 flex items-center">
                <svg
                  className="w-6 h-6 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4a8 8 0 0 0-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 0 0-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.55.59-3.1 1.76-4.24l7.07 7.07c-.27.37-.59.71-.98 1.1a5.928 5.928 0 0 1-4.85 2.07zm-4.93-4.93a5.928 5.928 0 0 1 4.85-2.07c1.83 0 3.44.82 4.54 2.07l-7.07 7.07c-1.14-1.17-1.76-2.72-1.76-4.24 0-1.55.59-3.1 1.76-4.24zm7.07-7.07l-7.07 7.07c.27-.37.59-.71.98-1.1a5.928 5.928 0 0 1 4.85-2.07c3.31 0 6 2.69 6 6 0 1.55-.59 3.1-1.76 4.24z" />
                </svg>
                <span className="ml-2 text-gray-700">{Likes}</span>
              </div>
              <div className="mt-4 flex items-center">
                <svg
                  className="w-6 h-6 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v7l9-5-9-2zm0 7V7L3 12l9 5z" />
                </svg>
                <span className="ml-2 text-gray-700">{NumberOfRecipes}</span>
              </div>
              <div className="mt-4 flex items-center">
                <svg
                  className="w-6 h-6 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <span className="ml-2 text-gray-700">
                  {YearsOfExperience} years of experience
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 mx-auto">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
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
                    <td className="py-2 px-4 border-b">{recipe.Rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
