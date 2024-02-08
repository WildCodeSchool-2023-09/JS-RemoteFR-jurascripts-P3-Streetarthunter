import PropTypes from "prop-types";
import "./CaptureAdmin.scss";

function CaptureAdmin({
  artCapture,
  setToggleModalCapture,
  setRefuseModalCapture,
  userId,
  captureId,
}) {
  const getCaptureURL = (artwork) => {
    const capturePath = artwork.capture.replace("public/", "");
    return `${import.meta.env.VITE_BACKEND_URL}/${capturePath}`;
  };

  return (
    <>
      {artCapture.map((capture) => (
        <div className="sa-grid-captures" key={capture.id}>
          <img
            alt="Street Art"
            className="img-grid"
            src={getCaptureURL(capture)}
          />
          <p className="posted-grid">
            Posté par{" "}
            <span className="posted-grid-red">{capture.user_pseudo}</span>
          </p>
          <button
            type="button"
            className="player-mode"
            onClick={() => {
              setToggleModalCapture(true);
              userId(capture.user_id);
              captureId(capture.id);
            }}
          >
            Valider
          </button>
          <button
            type="button"
            className="admin-mode"
            onClick={() => {
              setRefuseModalCapture(true);
              captureId(capture.id);
            }}
          >
            Refuser
          </button>
          <img
            alt="Street Art"
            className="original-img-grid"
            src={capture.artwork_url}
          />
          <p className="original-work-grid">Oeuvre Originale</p>
        </div>
      ))}
    </>
  );
}

CaptureAdmin.propTypes = {
  artCapture: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_pseudo: PropTypes.string.isRequired,
      capture: PropTypes.string.isRequired,
      artwork_url: PropTypes.string.isRequired,
      user_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  setToggleModalCapture: PropTypes.func.isRequired,
  setRefuseModalCapture: PropTypes.func.isRequired,
  userId: PropTypes.func.isRequired,
  captureId: PropTypes.func.isRequired,
};

export default CaptureAdmin;
