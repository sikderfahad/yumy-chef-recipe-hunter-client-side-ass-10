import "./ModernPart.css";
import introPic from "../../assets/img/intro-dark.png";

const ModernPart = () => {
  return (
    <div className="bg-[#121217]">
      <div className="md:w-10/12 w-11/12 mx-auto flex lg:flex-row gap-8 md:gap-0 flex-col-reverse py-24 items-center justify-between">
        <div className="intro-desc lg:w-6/12 w-full">
          <h5>WELCOME TO YUMY</h5>
          <h2 className="md:text-5xl mt-8 text-2xl ">
            We are a modern restaurant in the center of the city
          </h2>
          <p className=" my-8">
            From grilled Tandoori chicken burgers to simple chicken burgers with
            garlic rosemary mayonnaise, put a new twist on an old barbecue
            fYumyurite with these unique and chicken burger recipes.
          </p>

          <div className="w-fit mt-8">
            <button className="relative bg-transparent w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="flex w-full items-center justify-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                Explore More
              </span>
            </button>
          </div>
        </div>
        <div className="lg:w-6/12 w-full">
          <img className="w-full" src={introPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ModernPart;
