const SecTitle = ({
  title,
  bgtitle,
  subtitle,
  bgColor,
  color,
  opacity,
  bgGr,
  size,
  font,
  as,
}) => {
  return (
    <div className="sec-head text-center">
      <h6>{subtitle}</h6>
      <h2
        className={`tbg text-white ${as && "as-title"}`}
        style={{ color: bgColor, opacity: opacity }}
      >
        {bgtitle}
      </h2>
      <h3
        className={`${
          bgGr && "gradient-title"
        } lg:text-${size} lg:font-${font}`}
        style={{ color }}
      >
        {title}
      </h3>
    </div>
  );
};

export default SecTitle;
