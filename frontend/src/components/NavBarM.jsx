import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavBarM.scss";
import "../styles/commons.scss";
import home from "../assets/picto/white/home_white.svg";
import gallery from "../assets/picto/white/galery_white.svg";
import map from "../assets/picto/white/map_white.svg";
import register from "../assets/picto/white/profil_white.svg";
import login from "../assets/picto/white/connexion_white.svg";
import homeY from "../assets/picto/yellow/home_yell_full.png";
import galleryY from "../assets/picto/yellow/galery_yell_full.png";
import mapY from "../assets/picto/yellow/map_yell_full.png";

function NavBar({ activePage, handleChangePage }) {
  return (
    <nav className="navbar-mobile">
      <Link
        to="/"
        onClick={() => {
          handleChangePage("accueil");
        }}
      >
        <img src={activePage === "accueil" ? homeY : home} alt="" />
      </Link>
      <Link
        to="/galerie"
        onClick={() => {
          handleChangePage("galerie");
        }}
      >
        <img src={activePage === "galerie" ? galleryY : gallery} alt="" />
      </Link>
      <Link
        to="/carte"
        onClick={() => {
          handleChangePage("carte");
        }}
      >
        <img src={activePage === "carte" ? mapY : map} alt="" />
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

NavBar.propTypes = {
  activePage: PropTypes.oneOf(["accueil", "galerie", "carte"]).isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default NavBar;
