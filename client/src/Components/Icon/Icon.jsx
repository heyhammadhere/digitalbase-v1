const Icon = ({ size = 20, src = "" }) => {
  return (
    <img
      src={src}
      style={{
        width: size,
        height: size,
        marginRight: "1rem",
      }}
      alt="Icon"
    />
  );
};

export default Icon;
