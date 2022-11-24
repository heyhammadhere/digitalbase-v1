const Icon = ({ size = 20, src = "", margin = "" }) => {
  return src ? (
    <img
      src={src}
      style={{
        width: size,
        height: size,
        margin: margin,
      }}
      alt="Icon"
    />
  ) : (
    <span
      style={{
        width: size,
        height: size,
        margin: margin,
      }}
    ></span>
  );
};

export default Icon;
