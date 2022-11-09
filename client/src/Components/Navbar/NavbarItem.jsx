import Icon from "../Icon";

const NavbarItem = ({ iconSrc = "", text = "", classes = "", ...rest }) => {
  return (
    <li className={`navbar-link ${classes}`} {...rest}>
      <Icon src={iconSrc} margin="0rem 1rem 0rem 0rem" />
      <span>{text}</span>
    </li>
  );
};

export default NavbarItem;
