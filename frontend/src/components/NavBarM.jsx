import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavBarM.scss";
import "../styles/commons.scss";
import home from "../assets/picto/white/home_white.svg";
import map from "../assets/picto/white/map_white.svg";
import gallery from "../assets/picto/white/galery_white.svg";
import register from "../assets/picto/white/profil_white.svg";
import login from "../assets/picto/white/connexion_white.svg";

function NavBar({ activePage, handleChangePage }) {
  return (
    <nav className="navbar-mobile">
      <Link
        to="/"
        className={activePage === "accueil" ? "active" : ""}
        onClick={() => {
          handleChangePage("accueil");
        }}
      >
        <img src={home} alt="" />
      </Link>
      <Link
        to="/galerie"
        className={activePage === "galerie" ? "active" : ""}
        onClick={() => {
          handleChangePage("galerie");
        }}
      >
        <img src={gallery} alt="" />
      </Link>
      <Link
        to="/carte"
        className={activePage === "carte" ? "active" : ""}
        onClick={() => {
          handleChangePage("carte");
        }}
      >
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

NavBar.propTypes = {
  activePage: PropTypes.oneOf(["accueil", "galerie", "carte"]).isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default NavBar;
