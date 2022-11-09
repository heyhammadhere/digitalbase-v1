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
      <Icon src={iconSrc} />
      <span>{text}</span>
    </li>
  );
};

export default NavbarItem;
