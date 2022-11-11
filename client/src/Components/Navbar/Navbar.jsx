import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import logo from "../../assets/logos/digital-base.svg";
import youtube from "../../assets/icons/youtube-api.svg";
import seo from "../../assets/icons/seo-api.svg";
import music from "../../assets/icons/music-engine.svg";
import payments from "../../assets/icons/payments.svg";
import settings from "../../assets/icons/settings.svg";
import logout from "../../assets/icons/logout.svg";

const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          {[
            { path: "/", text: "Youtube API", src: youtube },
            { path: "/seo", text: "SEO API", src: seo },
            { path: "/music", text: "Music Engine", src: music },
            { path: "/payments", text: "Payments", src: payments },
            { path: "/settings", text: "Settings", src: settings },
            { path: "/logout", text: "Log Out", src: logout },
          ].map((item, index) => (
            <NavbarItem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
