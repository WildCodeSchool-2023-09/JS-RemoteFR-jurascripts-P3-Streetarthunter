import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./NavBar.scss";
import "../../styles/commons.scss";
import login from "../../assets/picto/white/connexion_white.svg";
import register from "../../assets/picto/white/profil_white.svg";
import profile from "../../assets/picto/yellow/profile_yell_full.png";

function NavBar({ activePage, handleChangePage }) {
  const { userMode, user } = useContext(AuthContext);
  console.info(userMode());
  return (
    <section className="nav-container">
      <h1 className={user.is_administrator === 3 ? "" : userMode()}>
        STREET ART HUNTER
      </h1>
      <nav className={user.is_administrator === 3 ? "navbar" : userMode()}>
        <Link
          to="/"
          className={`img-nav-link ${activePage === "accueil" ? "active" : ""}`}
          onClick={() => {
            handleChangePage("accueil");
          }}
        >
          <h3 className={user.is_administrator === 3 ? "" : userMode()}>
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
          <h3 className={user.is_administrator === 3 ? "" : userMode()}>
            GALERIE
          </h3>
        </Link>
        <Link
          to="/carte"
          className={`img-nav-link ${activePage === "carte" ? "active" : ""}`}
          onClick={() => {
            handleChangePage("carte");
          }}
        >
          <h3 className={user.is_administrator === 3 ? "" : userMode()}>
            CARTE
          </h3>
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
            className={user.is_administrator === 3 ? "img" : userMode()}
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
            className={user.is_administrator === 3 ? "img" : userMode()}
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
};

export default NavBar;
