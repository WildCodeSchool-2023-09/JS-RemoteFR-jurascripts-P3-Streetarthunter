import { useState, useEffect } from "react";
import axios from "axios";

function CaptureAdmin() {
  const [artCapture, setArtCapture] = useState([]);
  console.info(artCapture);

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
        <div className="sa-grid">
          <img alt="Street Art" className="img-grid" src={artwork.picture} />
          <p className="posted-grid">
            Posté par{" "}
            <span className="posted-grid-red">{artwork.user_pseudo}</span>
          </p>
          <button type="button" className="validate-grid">
            Valider
          </button>
          <button type="button" className="refuse-grid">
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
