import { useState, useEffect } from "react";
import axios from "axios";

function NewArtAdmin() {
  const [newArt, setNewArt] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artworks`, {
        params: {
          general_gallery: false,
        },
      })
      .then((response) => {
        setNewArt(response.data);
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
      {newArt.map((artwork) => (
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

export default NewArtAdmin;
