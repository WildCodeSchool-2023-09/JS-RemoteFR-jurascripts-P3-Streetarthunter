import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavBar.scss";
import "../styles/commons.scss";
import login from "../assets/picto/white/connexion_white.svg";
import register from "../assets/picto/white/profil_white.svg";

function NavBar({ activePage, handleChangePage }) {
  return (
    <section className="nav-container">
      <h1>STREET ART HUNTER</h1>
      <nav className="navbar">
        <Link
          to="/"
          className={`img-nav-link ${activePage === "accueil" ? "active" : ""}`}
          onClick={() => {
            handleChangePage("accueil");
          }}
        >
          <h3>ACCUEIL</h3>
        </Link>
        <Link
          to="/galerie"
          className={`img-nav-link ${activePage === "galerie" ? "active" : ""}`}
          onClick={() => {
            handleChangePage("galerie");
          }}
        >
          <h3>GALERIE</h3>
        </Link>
        <Link
          to="/carte"
          className={`img-nav-link ${activePage === "carte" ? "active" : ""}`}
          onClick={() => {
            handleChangePage("carte");
          }}
        >
          <h3>CARTE</h3>
        </Link>
        <Link to="/inscription" className="img-nav-link">
          <img src={register} alt="" />
          <p>Inscription</p>
        </Link>
        <Link to="/connexion" className="img-nav-link">
          <img src={login} alt="" />
          <p>Connexion</p>
        </Link>
      </nav>
    </section>
  );
}

NavBar.propTypes = {
  activePage: PropTypes.oneOf(["accueil", "galerie", "carte"]).isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default NavBar;
