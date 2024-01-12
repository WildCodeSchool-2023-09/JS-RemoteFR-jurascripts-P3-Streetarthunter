import { Link } from "react-router-dom";

import "./NavBar.scss";
import "../styles/commons.scss";
import login from "../assets/picto/white/connexion_white.svg";
import register from "../assets/picto/white/profil_white.svg";

function NavBar() {
  return (
    <section className="nav-container">
      <h1>STREET ART HUNTER</h1>
      <nav className="navbar">
        <Link to="/" className="img-nav-link">
          <h3>ACCEUIL</h3>
        </Link>
        <Link to="/galery" className="img-nav-link">
          <h3>GALERIE</h3>
        </Link>
        <Link to="/map" className="img-nav-link">
          <h3>CARTE</h3>
        </Link>
        <Link to="/register" className="img-nav-link">
          <img src={register} alt="" />
          <p>Inscription</p>
        </Link>
        <Link to="/login" className="img-nav-link">
          <img src={login} alt="" />
          <p>Connexion</p>
        </Link>
      </nav>
    </section>
  );
}

export default NavBar;
