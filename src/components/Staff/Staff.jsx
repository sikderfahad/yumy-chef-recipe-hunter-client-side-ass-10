import SecTitle from "../SecTitle/SecTitle";
import cutlery from "../../assets/img/icons/cutlery.png";
import "./Staff.css";
// https://i.ibb.co/Rhd6xVp/chef-3.jpg
// https://i.ibb.co/mTJqV5B/chef-2.jpg
// https://i.ibb.co/M96rwf2/chef-1.jpg
// https://i.ibb.co/7ncxFT5/chef-4.jpg

const imgBox = [
  "https://i.ibb.co/Rhd6xVp/chef-3.jpg",
  "https://i.ibb.co/mTJqV5B/chef-2.jpg",
  "https://i.ibb.co/M96rwf2/chef-1.jpg",
  "https://i.ibb.co/7ncxFT5/chef-4.jpg",
];

const Staff = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-32">
      <div className="">
        <SecTitle
          title={"Experience Chefs"}
          bgtitle={"Staff"}
          bgColor={"green"}
          opacity={"0.1"}
          subtitle={"Our Staff"}
          color={"black"}
          font={"bold"}
          as={true}
        ></SecTitle>
        <span className="cutlery relative text-center block w-fit mx-auto -mt-16">
          {" "}
          <img
            src={cutlery}
            className="w-[30px] text-center mx-auto"
            alt=""
          />{" "}
        </span>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {imgBox.map((img) => (
          <div
            className="ftr-img relative hover:scale-95 hover:shadow-2xl duration-200"
            key={img}
          >
            <img className="w-full" src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
