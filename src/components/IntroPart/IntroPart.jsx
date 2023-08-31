import { Link } from "react-router-dom";
import "./IntroPart.css";
const IntroPart = () => {
  // https://i.ibb.co/L1M1ys8/intro-img1.jpg
  // https://i.ibb.co/Pt8VLJg/intro-img3.jpg
  // https://i.ibb.co/WHcpNd9/intro-img2.jpg
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center gap-8 mt-16 mb-24">
      <div className="lg:w-6/12 w-full">
        <h5 className="colorful">WELCOME TO YUMY</h5>
        <p
          className="md:text-5xl mt-8 text-2xl font-semibold"
          style={{ lineHeight: "1.3" }}
        >
          We are a modern restaurant in the center of the city
        </p>
        <p className="my-8 leading-8 text-[#777] font-medium">
          From grilled Tandoori chicken burgers to simple chicken burgers with
          garlic rosemary mayonnaise, put a new twist on an old barbecue
          fYumyurite with these unique and chicken burger recipes.
        </p>

        <div className="w-full text-center md:text-left md:w-fit mt-8">
          <Link to={`/`}>
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Look More
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-6/12 w-full p-0 md:px-8">
        <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="">
              <img
                className="w-full rounded-2xl"
                src="https://i.ibb.co/WHcpNd9/intro-img2.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:w-[350px]">
              <img
                className="w-full rounded-2xl h-full md:h-[300px]"
                src="https://i.ibb.co/Pt8VLJg/intro-img3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:border-[16px] md:border-white rounded-2xl">
            <img
              className="w-full rounded-2xl"
              src="https://i.ibb.co/L1M1ys8/intro-img1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPart;
