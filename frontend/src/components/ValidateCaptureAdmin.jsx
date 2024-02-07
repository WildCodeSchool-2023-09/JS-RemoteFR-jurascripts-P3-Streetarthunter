import PropTypes from "prop-types";
import CrossButton from "../assets/picto/yellow/cross_yell.svg";
import "./ValidateCaptureAdmin.scss";

function ValidateCaptureAdmin({
  setToggleModalCapture,
  handleNewArtworkCheck,
  handleHardToFindCheck,
  handleAllFieldsFilledCheck,
  handleValidateButtonClick,
  isNewArtwork,
  isHardToFind,
  isAllFieldsFilled,
  pointsUserId,
}) {
  return (
    <section className="ValidateCapturePoints">
      <div>
        <button
          type="button"
          onClick={() => {
            setToggleModalCapture(false);
          }}
        >
          <img src={CrossButton} alt="Fermeture du filtre" />
        </button>
      </div>
      <h2>Valider</h2>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={isNewArtwork}
            onChange={handleNewArtworkCheck}
          />
          <p>Nouvelle oeuvre</p>
        </li>
        <li>
          <input
            type="checkbox"
            checked={isHardToFind}
            onChange={handleHardToFindCheck}
          />
          <p>Oeuvre difficile à trouver</p>
        </li>
        <li>
          <input
            type="checkbox"
            checked={isAllFieldsFilled}
            onChange={handleAllFieldsFilledCheck}
          />
          <p>Tous les champs sont renseignés</p>
        </li>
        <li>
          <input type="checkbox" />
          <p>Ajouter cette oeuvre à la galerie générale</p>
        </li>
      </ul>
      <button
        type="button"
        className="button-red"
        onClick={() => {
          handleValidateButtonClick(pointsUserId);
        }}
      >
        Valider l'oeuvre
      </button>
    </section>
  );
}

ValidateCaptureAdmin.propTypes = {
  setToggleModalCapture: PropTypes.func.isRequired,
  handleNewArtworkCheck: PropTypes.func.isRequired,
  handleHardToFindCheck: PropTypes.func.isRequired,
  handleAllFieldsFilledCheck: PropTypes.func.isRequired,
  handleValidateButtonClick: PropTypes.func.isRequired,
  isNewArtwork: PropTypes.func.isRequired,
  isHardToFind: PropTypes.func.isRequired,
  isAllFieldsFilled: PropTypes.func.isRequired,
  pointsUserId: PropTypes.func.isRequired,
};

export default ValidateCaptureAdmin;
