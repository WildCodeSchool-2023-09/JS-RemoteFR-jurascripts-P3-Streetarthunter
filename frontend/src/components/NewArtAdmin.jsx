import { useState, useEffect } from "react";
import axios from "axios";
import "./NewArtAdmin.scss";

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

  const getFirstSentence = (text) => {
    if (text === null || text === undefined) {
      return ""; // Retourne une chaîne vide si le texte est null ou undefined
    }

    const sentences = text.split("."); // Supposant que les phrases se terminent par un point
    const firstSentence = sentences[0].trim();
    return firstSentence;
  };

  return (
    <>
      {newArt.map((artwork) => (
        <div className="sa-flex-newart">
          <div className="sa-element-left">
            <img alt="Street Art" className="img-grid" src={artwork.picture} />
            <p className="posted-grid">
              Posté par{" "}
              <span className="posted-grid-red">{artwork.user_pseudo}</span>
            </p>
          </div>
          <div className="sa-element-right">
            <h3 className="grid-namework-h3">Nom de l'oeuvre</h3>
            <p className="grid-titleart-p">{artwork.title}</p>
            <h3 className="grid-artist-h3">Artiste</h3>
            <p className="grid-nameart-p">
              {getFirstSentence(artwork.artist_name)}
            </p>
            <h3 className="grid-desc-h3">Description</h3>
            <p className="grid-desc-h3">
              {getFirstSentence(artwork.description)}
            </p>
            <h3 className="grid-aboutart-h3">A propos de l'artiste</h3>
            <p className="grid-bioart-p">{artwork.artist_bio}</p>
            <div className="sa-btn-div">
              <button type="button" className="validate-grid">
                Valider
              </button>
              <button type="button" className="modif-grid">
                Modifier
              </button>
              <button type="button" className="refuse-grid">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NewArtAdmin;
