import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./NavBarM.scss";
import "../../styles/commons.scss";
import home from "../../assets/picto/white/home_white.svg";
import gallery from "../../assets/picto/white/galery_white.svg";
import map from "../../assets/picto/white/map_white.svg";
import register from "../../assets/picto/white/profil_white.svg";
import login from "../../assets/picto/white/connexion_white.svg";
import homeY from "../../assets/picto/yellow/home_yell_full.png";
import galleryY from "../../assets/picto/yellow/galery_yell_full.png";
import mapY from "../../assets/picto/yellow/map_yell_full.png";
import profile from "../../assets/picto/yellow/profile_yell_full.png";
import deconnect from "../../assets/picto/yellow/connexion_yell_full.png";

function NavBarM({ isPlayerMode, isAdminMode }) {
  const { userMode, user } = useContext(AuthContext);
  const [activePage, setActivePage] = useState("accueil");
  const handleChangePage = (page) => {
    setActivePage(page);
  };
  console.info(user);
  return (
    <nav className="navbar-mobile">
      <Link
        to="/"
        onClick={() => {
          handleChangePage("accueil");
        }}
      >
        <img
          src={activePage === "accueil" ? homeY : home}
          alt=""
          className={isAdminMode || isPlayerMode ? userMode() : ""}
        />
      </Link>
      <Link
        to="/galerie"
        onClick={() => {
          handleChangePage("galerie");
        }}
      >
        <img
          src={activePage === "galerie" ? galleryY : gallery}
          alt=""
          className={isAdminMode || isPlayerMode ? userMode() : ""}
        />
      </Link>
      <Link
        to="/carte"
        onClick={() => {
          handleChangePage("carte");
        }}
      >
        <img
          src={activePage === "carte" ? mapY : map}
          alt=""
          className={isAdminMode || isPlayerMode ? userMode() : ""}
        />
      </Link>
      <Link
        to={user.is_administrator === 3 ? "/inscription" : "/user/profil"}
        onClick={() => {
          handleChangePage("profil");
        }}
      >
        <img
          src={activePage === "profil" ? profile : register}
          alt=""
          className={isAdminMode || isPlayerMode ? userMode() : ""}
        />
      </Link>
      <Link
        to={user.is_administrator === 3 ? "/connexion" : "/user/logout"}
        onClick={() => {
          handleChangePage("connexion");
        }}
      >
        <img
          src={activePage === "connexion" ? deconnect : login}
          alt=""
          className={isAdminMode || isPlayerMode ? userMode() : ""}
        />
      </Link>
    </nav>
  );
}

NavBarM.propTypes = {
  isPlayerMode: PropTypes.bool.isRequired,
  isAdminMode: PropTypes.bool.isRequired,
};

export default NavBarM;
