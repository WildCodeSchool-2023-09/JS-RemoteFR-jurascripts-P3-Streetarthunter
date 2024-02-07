import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./CaptureAdmin.scss";

function CaptureAdmin({ setToggleModalCapture, userId }) {
  const [artCapture, setArtCapture] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artworks`, {
        params: {
          general_gallery: true,
        },
      })
      .then((response) => {
        setArtCapture(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs:",
          error
        );
      });
  }, []);

  return (
    <>
      {artCapture.map((artwork) => (
        <div className="sa-grid-captures">
          <img alt="Street Art" className="img-grid" src={artwork.picture} />
          <p className="posted-grid">
            Posté par{" "}
            <span className="posted-grid-red">{artwork.user_pseudo}</span>
          </p>
          <button
            type="button"
            className="button-cyan"
            onClick={() => {
              setToggleModalCapture(true);
              userId(artwork.user_id);
            }}
          >
            Valider
          </button>
          <button type="button" className="button-red">
            Refuser
          </button>
          <img
            alt="Street Art"
            className="original-img-grid"
            src={artwork.picture}
          />
          <p className="original-work-grid">Oeuvre Originale</p>
        </div>
      ))}
    </>
  );
}

CaptureAdmin.propTypes = {
  setToggleModalCapture: PropTypes.func.isRequired,
  userId: PropTypes.func.isRequired,
};

export default CaptureAdmin;
