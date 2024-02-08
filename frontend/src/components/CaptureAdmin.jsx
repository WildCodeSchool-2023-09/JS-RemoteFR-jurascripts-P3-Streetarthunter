import PropTypes from "prop-types";
import "./CaptureAdmin.scss";

function CaptureAdmin({
  artCapture,
  setToggleModalCapture,
  userId,
  captureId,
}) {
  const getCaptureURL = (artwork) => {
    const capturePath = artwork.capture.replace("public/", "");
    return `${import.meta.env.VITE_BACKEND_URL}/${capturePath}`;
  };

  return (
    <>
      {artCapture.map((artwork) => (
        <div className="sa-grid-captures" key={artwork.id}>
          <img
            alt="Street Art"
            className="img-grid"
            src={getCaptureURL(artwork)}
          />
          <p className="posted-grid">
            Posté par{" "}
            <span className="posted-grid-red">{artwork.user_pseudo}</span>
          </p>
          <button
            type="button"
            className="player-mode"
            onClick={() => {
              setToggleModalCapture(true);
              userId(artwork.user_id);
              captureId(artwork.id);
            }}
          >
            Valider
          </button>
          <button type="button" className="admin-mode">
            Refuser
          </button>
          <img
            alt="Street Art"
            className="original-img-grid"
            src={artwork.artwork_url}
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
  userId: PropTypes.func.isRequired,
  captureId: PropTypes.func.isRequired,
};

export default CaptureAdmin;
