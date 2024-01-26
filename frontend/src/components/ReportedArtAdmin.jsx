import { useState, useEffect } from "react";
import axios from "axios";

function ReportedArtAdmin() {
  const [artReported, setArtReported] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artworks`, {
        params: {
          reported: true,
        },
      })
      .then((response) => {
        setArtReported(response.data);
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
      {artReported.map((artwork) => (
        <div className="sa-grid">
          <img alt="Street Art" className="img-grid" src={artwork.picture} />
          <p className="posted-grid">
            Posté par{" "}
            <span className="posted-grid-red">{artwork.user_pseudo}</span>
          </p>
          <button type="button" className="validate-grid">
            Annuler
          </button>
          <button type="button">Modifier</button>
          <button type="button" className="refuse-grid">
            Supprimer
          </button>
          <h3>Nom de l'oeuvre</h3>
          <p>{artwork.title}</p>
          <h3>Artiste</h3>
          <p>{artwork.artist_name}</p>
          <h3>Description</h3>
          <p>{artwork.description}</p>
          <h3>A propos de l'artiste</h3>
          <p>{artwork.artist_bio}</p>
        </div>
      ))}
    </>
  );
}

export default ReportedArtAdmin;
