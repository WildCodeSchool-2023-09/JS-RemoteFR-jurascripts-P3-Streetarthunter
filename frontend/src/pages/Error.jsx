import { Link } from "react-router-dom";
import "../styles/commons.scss";
import logo from "../assets/Logo.svg";

function Error() {
  return (
    <section>
      <img src={logo} alt="logo" />
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
