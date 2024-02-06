import PropTypes from "prop-types";
import CrossButton from "../assets/picto/yellow/cross_yell.svg";

function ValidateCaptureAdmin({ setToggleModalCapture }) {
  return (
    <section>
      <button
        type="button"
        onClick={() => {
          setToggleModalCapture(false);
        }}
      >
        <img src={CrossButton} alt="Fermeture du filtre" />
      </button>
      <h2>Valider</h2>
      <ul>
        <li>
          <input type="checkbox" />
          <p>Nouvelle oeuvre</p>
        </li>
        <li>
          <input type="checkbox" />
          <p>Oeuvre difficile à trouver</p>
        </li>
        <li>
          <input type="checkbox" />
          <p>Tous les champs sont renseignés</p>
        </li>
        <li>
          <input type="checkbox" />
          <p>Ajouter cette oeuvre à la galerie générale</p>
        </li>
      </ul>
      <button type="button">Valider l'oeuvre</button>
    </section>
  );
}

ValidateCaptureAdmin.propTypes = {
  setToggleModalCapture: PropTypes.func.isRequired,
};

export default ValidateCaptureAdmin;
