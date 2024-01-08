import "./NavBar.scss";
import "../styles/commons.scss";

function NavBar() {
  return (
    <section>
      <h1>STREET ART HUNTER</h1>
      <nav className="navbar">
        <h3>ACCEUIL</h3>
        <h3>GALERIE</h3>
        <h3>CARTE</h3>
        <div>
          <img src="./src/assets/picto/yellow/profile_yell.png" alt="" />
          <p>Inscription</p>
        </div>
        <div>
          <img src="./src/assets/picto/yellow/connexion-yell.png" alt="" />
          <p>Connexion</p>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
