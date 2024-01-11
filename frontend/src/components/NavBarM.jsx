import { Link } from "react-router-dom";

import "./NavBarM.scss";
import "../styles/commons.scss";

function NavBar() {
  return (
    <nav className="navbar-mobile">
      <Link to="/">
        <img src="./src/assets/picto/white/home_white.svg" alt="" />
      </Link>
      <Link to="/galery">
        <img src="frontend/src/assets/picto/white/galery_white.svg" alt="" />
      </Link>
      <Link to="/map">
        <img src="./src/assets/picto/white/map_white.svg" alt="" />
      </Link>
      <Link to="/register">
        <img src="./src/assets/picto/white/profil_white.svg" alt="" />
      </Link>
      <Link to="/login">
        <img src="./src/assets/picto/white/connexion_white.svg" alt="" />
      </Link>
    </nav>
  );
}

export default NavBar;
