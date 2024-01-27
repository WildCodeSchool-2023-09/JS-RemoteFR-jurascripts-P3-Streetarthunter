import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./NavBar.scss";
import "../../styles/commons.scss";
import login from "../../assets/picto/white/connexion_white.svg";
import register from "../../assets/picto/white/profil_white.svg";
import profile from "../../assets/picto/yellow/profile_yell_full.png";

function NavBar({ activePage, handleChangePage, isPlayerMode, isAdminMode }) {
  const { userMode, user } = useContext(AuthContext);

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
          <h3 className={isAdminMode || isPlayerMode ? userMode() : ""}>
            ACCUEIL
          </h3>
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
          to={user.is_administrator === 3 ? "/inscription" : "/user/profil"}
          className="img-nav-link"
          onClick={() => {
            handleChangePage("user/profil");
          }}
        >
          <img
            src={activePage === "user/profil" ? profile : register}
            alt=""
            className={isPlayerMode ? "player-mode" : ""}
          />
          <p>{user.is_administrator === 3 ? "Inscription" : "Profil"}</p>
        </Link>
        <Link
          to={user.is_administrator === 3 ? "/connexion" : "/user/logout"}
          className="img-nav-link"
        >
          <img
            src={login}
            alt=""
            className={isPlayerMode ? "player-mode" : ""}
          />
          <p>{user.is_administrator === 3 ? "Connexion" : "Déconnexion"}</p>
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
