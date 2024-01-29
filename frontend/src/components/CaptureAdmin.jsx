import { useState, useEffect } from "react";
import axios from "axios";
import "./CaptureAdmin.scss";

function CaptureAdmin() {
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
          <button type="button" className="button-cyan">
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

export default CaptureAdmin;
