import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../components/ChefCard/ChefCard";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div>
      <Banner></Banner>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto md:w-10/12 w-11/12">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
