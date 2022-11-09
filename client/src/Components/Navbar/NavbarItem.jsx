import Icon from "../Icon";

const NavbarItem = ({ iconSrc, text, ...rest }) => {
  return (
    <li
      {...rest}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon src={iconSrc} margin="0rem 1rem 0rem 0rem" />
      <span>{text}</span>
    </li>
  );
};

export default NavbarItem;
