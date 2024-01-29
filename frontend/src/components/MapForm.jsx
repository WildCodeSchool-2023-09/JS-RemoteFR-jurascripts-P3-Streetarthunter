import { useState } from "react";
import axios from "axios";
import Dropzone from "./DropZone";
import "./MapForm.scss";

function MapForm() {
  const [userLogged, setUserLogged] = useState(false);

  const handleClick = () => {
    setUserLogged(true);
  };

  const handleSubmit = async () => {
    try {
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:3310";

      const locationData = {
        city: "Paris",
        country: "France",
        post_code: 75013,
        street: "Rue Gérard",
        street_number: 62,
        latitude: 48.8293,
        longitude: 2.352,
      };

      const locationResponse = await axios.post(
        `${backendUrl}/api/locations`,
        locationData
      );

      if (!locationResponse.data) {
        console.error(
          "Erreur lors de la création de l'emplacement :",
          locationResponse.data
        );
      }

      const artworkData = {
        title: "Vivre c'est de la bombe",
        picture: "https://shorturl.at/civKS",
        description:
          "Une nouvelle collaboration entre Jace et Miss.Tic sur un mur de la Butte aux Cailles",
        artist_id: 42,
        user_id: 52,
        general_gallery: false,
        reported: false,
        location_id: 159,
      };

      const artworkResponse = await axios.post(
        `${backendUrl}/api/artworks`,
        artworkData
      );

      if (!artworkResponse.data) {
        throw new Error("Erreur lors de la création de l'œuvre d'art");
      }
    } catch (error) {
      // Gestion des erreurs
      console.error("Erreur lors de la soumission des données.", error.message);
    }
  };

  return (
    <div className="form-container">
      {userLogged ? (
        <>
          <h2 className="add-h2">Ajouter une œuvre</h2>
          <Dropzone />
          <form className="content">
            <div className="parent-div">
              <div className="left-container">
                <div className="align-div">
                  <p>
                    Nom de l'artiste <span className="cyan-span">*</span>
                  </p>
                  <input name="artistName" />
                </div>
                <div className="align-div">
                  <p>Nom de l'œuvre</p>
                  <input name="title" />
                </div>
                <div className="align-div">
                  <p>
                    Adresse <span className="cyan-span">*</span>
                  </p>
                  <input name="street" />
                </div>
                <div className="align-div">
                  <p>
                    Ville <span className="cyan-span">*</span>
                  </p>
                  <input name="city" />
                </div>
              </div>
              <div className="right-container">
                <div className="align-div">
                  <p>
                    Description de l'œuvre <span className="cyan-span">*</span>
                  </p>
                  <input name="description" className="desc-inp" />
                </div>
                <div className="align-div">
                  <p>
                    À propos de l'artiste
                    <span className="cyan-span"> (bonus)</span>
                  </p>
                  <input name="artistBio" className="about-inp" />
                </div>
              </div>
            </div>
          </form>
          <button type="button" className="sub-button" onClick={handleSubmit}>
            Soumettre
          </button>
        </>
      ) : (
        <button type="button" onClick={handleClick} className="reg-button">
          S'inscrire pour jouer
        </button>
      )}
    </div>
  );
}

export default MapForm;
