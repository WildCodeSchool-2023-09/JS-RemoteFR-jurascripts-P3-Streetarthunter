import { Link } from "react-router-dom";
import "../styles/commons.scss";

function Error() {
  return (
    <section>
      <img src="/JS-RemoteFR-jurascripts-P3-Streetarthunter/frontend/src/assets/Logo.svg" alt="logo" />
      <h2>Désolé, il n'y a rien ici !</h2>
      <Link to="/">
        <button type="button" className="button-yellow">
          Retour à l'accueil
        </button>
      </Link>
    </section>
  );
}

export default Error;
