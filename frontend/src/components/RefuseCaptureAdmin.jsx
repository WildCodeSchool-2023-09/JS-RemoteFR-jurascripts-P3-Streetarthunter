import PropTypes from "prop-types";
import CrossButton from "../assets/picto/yellow/cross_yell.svg";
import "./RefuseCaptureAdmin.scss";

function RefuseCaptureAdmin({
  handleRefuseButtonClick,
  deleteCaptureId,
  setRefuseModalCapture,
}) {
  return (
    <section className="RefuseCapture">
      <div>
        <button
          type="button"
          onClick={() => {
            setRefuseModalCapture(false);
          }}
        >
          <img src={CrossButton} alt="Fermeture du filtre" />
        </button>
      </div>
      <h2>Refuser</h2>
      <p>
        Êtes vous sûr de vouloir refuser et de n'accorder aucun points au joueur
        qui a prit cette capture ?
      </p>
      <button
        type="button"
        className="button-red"
        onClick={() => {
          handleRefuseButtonClick(deleteCaptureId);
        }}
      >
        Refuser l'oeuvre
      </button>
    </section>
  );
}

RefuseCaptureAdmin.propTypes = {
  handleRefuseButtonClick: PropTypes.func.isRequired,
  deleteCaptureId: PropTypes.number.isRequired,
  setRefuseModalCapture: PropTypes.func.isRequired,
};

export default RefuseCaptureAdmin;
