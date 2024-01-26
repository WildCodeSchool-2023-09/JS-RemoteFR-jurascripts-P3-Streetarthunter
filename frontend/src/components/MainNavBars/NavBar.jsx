import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./NavBar.scss";
import "../../styles/commons.scss";
import login from "../../assets/picto/white/connexion_white.svg";
import register from "../../assets/picto/white/profil_white.svg";
import deconnect from "../../assets/picto/yellow/connexion_yell_full.png";
import profile from "../../assets/picto/yellow/profile_yell_full.png";

function NavBar({ activePage, handleChangePage, isPlayerMode, isAdminMode }) {
  const { userMode } = useContext(AuthContext);
  return (
    <section className="nav-container">
      <h1 className={isAdminMode || isPlayerMode ? userMode() : ""}>
        STREET ART HUNTER
      </h1>
      <nav className="navbar">
        <Link
          to="/"
          className={`img-nav-link ${activePage === "accueil" ? "active" : ""}`}
          onClick={() => {
            handleChangePage("accueil");
          }}
        >
          <h3 className={isPlayerMode ? "player-mode" : ""}>ACCUEIL</h3>
        </Link>
        <Link
          to="/galerie"
          className={`img-nav-link ${activePage === "galerie" ? "active" : ""}`}
          onClick={() => {
            handleChangePage("galerie");
          }}
        >
          <h3 className={isPlayerMode ? "player-mode" : ""}>GALERIE</h3>
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
        <Link
          to={isPlayerMode ? "/user/profil" : "/inscription"}
          className="img-nav-link"
          onClick={() => {
            handleChangePage("incription");
          }}
        >
          <img
            src={activePage === "inscription" ? profile : register}
            alt=""
            className={isPlayerMode ? "player-mode" : ""}
          />
          <p>{isPlayerMode ? "Profil" : "Inscription"}</p>
        </Link>
        <Link
          to="/connexion"
          className="img-nav-link"
          onClick={() => {
            handleChangePage("connexion");
          }}
        >
          <img
            src={activePage === "connexion" ? deconnect : login}
            alt=""
            className={isPlayerMode ? "player-mode" : ""}
          />
          <p>{isPlayerMode ? "Déconnexion" : "Connexion"}</p>
        </Link>
      </nav>
    </section>
  );
}

NavBar.propTypes = {
  activePage: PropTypes.oneOf(["accueil", "galerie", "carte"]).isRequired,
  handleChangePage: PropTypes.func.isRequired,
  isPlayerMode: PropTypes.bool.isRequired,
  isAdminMode: PropTypes.bool.isRequired,
};

export default NavBar;
