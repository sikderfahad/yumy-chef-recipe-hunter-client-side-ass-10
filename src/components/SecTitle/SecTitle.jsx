const SecTitle = ({ title, subtitle }) => {
  return (
    <div className="sec-head text-center">
      <h6>{subtitle}</h6>
      <h2 className="tbg text-white">{subtitle}</h2>
      <h3 className="gradient-title">{title}</h3>
    </div>
  );
};

export default SecTitle;
