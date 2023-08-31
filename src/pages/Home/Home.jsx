import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../components/ChefCard/ChefCard";
import ModernPart from "../../components/ModernPart/ModernPart";
import Services from "../../components/Services/Services";
import LazyLoad from "react-lazy-load";
import useTitle from "../../Custom/UseTitle/useTitle";
import IntroPart from "../../components/IntroPart/IntroPart";

const Home = () => {
  const chefs = useLoaderData();
  useTitle("Home");
  return (
    <div>
      <LazyLoad>
        <Banner></Banner>
      </LazyLoad>

      <IntroPart></IntroPart>

      <hr className="w-11/12 md:w-10/12 mx-auto block pb-6"></hr>

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
