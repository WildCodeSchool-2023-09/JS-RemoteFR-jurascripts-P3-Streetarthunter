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
      <Link to="/galerie">
        <img src={gallery} alt="" />
      </Link>
      <Link to="/carte">
        <img src={map} alt="" />
      </Link>
      <Link to="/inscription">
        <img src={register} alt="" />
      </Link>
      <Link to="/connexion">
        <img src={login} alt="" />
      </Link>
    </nav>
  );
}

export default NavBar;
