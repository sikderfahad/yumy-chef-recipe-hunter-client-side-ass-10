import "./Banner.css";
import shapeCurve from "../../assets/img/bg-curve.png";

const Banner = () => {
  return (
    <div className={`w-full banner `}>
      <div className="md:w-8/12 mx-auto content-container text-center relative top-9 md:top-28">
        <h1 className="text-3xl md:text-7xl md:font-extrabold font-bold py-3">
          Tasty Food
        </h1>
        <h2 className="text-white text-4xl md:text-6xl my-8">
          Fresh & Tasty Meals
        </h2>
        <h3 className="text-white tracking-normal md:tracking-[15px]">
          Recipes Every Week Updates
        </h3>
        <button className="mt-8 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-semibold text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 md:px-10 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Check Our Menu
          </span>
        </button>
      </div>
      <div className="shape-bottom">
        <img src={shapeCurve} alt="" />
      </div>
    </div>
  );
};

export default Banner;
