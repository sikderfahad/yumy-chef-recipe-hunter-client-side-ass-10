import cooking from "../../assets/img/cooking.png";
import cook from "../../assets/img/cook.png";
import chef from "../../assets/img/chef.png";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: cooking,
      title: "BREAKFAST",
      info: "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium natus error sit voluptatem accusantium.",
    },
    {
      icon: cook,
      title: "LUNCH",
      info: "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium natus error sit voluptatem accusantium.",
    },
    {
      icon: chef,
      title: "DINNER",
      info: "Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium natus error sit voluptatem accusantium.",
    },
  ];

  return (
    <div className="bg-black py-[100px]">
      <div className="sec-head text-center">
        <h6>Services</h6>
        <h2 className="tbg text-white">Services</h2>
        <h3 className="gradient-title">Our Features</h3>
      </div>

      <div className="grid grid-cols-1 w-10/12 mx-auto my-10 md:grid-cols-3 gap-7">
        {services.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center gap-8">
            <div>
              <img className="w-[150px]" src={item.icon} alt="" />
            </div>
            <div>
              <h6 className="text-xl mb-4 gradient-title uppercase">
                {item.title}
              </h6>
              <p className="text-[#babbbb] leading-loose	">{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
