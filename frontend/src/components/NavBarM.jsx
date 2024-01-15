import { Link } from "react-router-dom";

import "./NavBarM.scss";
import "../styles/commons.scss";
import home from "../assets/picto/white/home_white.svg";
import map from "../assets/picto/white/map_white.svg";
import gallery from "../assets/picto/white/galery_white.svg";
import register from "../assets/picto/white/profil_white.svg";
import login from "../assets/picto/white/connexion_white.svg";

function NavBar() {
  return (
    <nav className="navbar-mobile">
      <Link to="/">
        <img src={home} alt="" />
      </Link>
      <Link to="/galery">
        <img src={gallery} alt="" />
      </Link>
      <Link to="/map">
        <img src={map} alt="" />
      </Link>
      <Link to="/register">
        <img src={register} alt="" />
      </Link>
      <Link to="/login">
        <img src={login} alt="" />
      </Link>
    </nav>
  );
}

export default NavBar;
