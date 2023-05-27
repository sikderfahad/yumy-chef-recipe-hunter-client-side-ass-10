import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../components/ChefCard/ChefCard";
import ModernPart from "../../components/ModernPart/ModernPart";
import Services from "../../components/Services/Services";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto md:w-10/12 w-11/12">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>

      <ModernPart></ModernPart>
      <Services></Services>
    </div>
  );
};

export default Home;
