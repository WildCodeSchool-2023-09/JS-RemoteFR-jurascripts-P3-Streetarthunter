import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Dropzone from "./DropZone";
import "./MapForm.scss";

function MapForm() {
  const { user, handleAuth } = useContext(AuthContext);
  const [artistSelect, setArtistSelect] = useState();
  const [artists, setArtists] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [filteredArtwork, setFilteredArtwork] = useState([]);
  const [selectedArtworkId, setSelectedArtworkId] = useState(null);

  // récup donnée artist et artwork
  const getInfos = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artworks`)
      .then((res) => setArtworks([...res.data]))
      .catch((err) =>
        console.error("Erreur lors de la récupération des données :", err)
      );
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artists`)
      .then((res) => setArtists(res.data))
      .catch((err) =>
        console.error("Erreur lors de la récupération des données :", err)
      );
  };

  useEffect(() => {
    const filteredArtworks = artworks.filter((artwork) => {
      const artistName = artwork.artist_name;
      return (
        artistName &&
        artistName.toLowerCase().includes(artistSelect.toLowerCase())
      );
    });

    setFilteredArtwork(filteredArtworks);
  }, [artistSelect]);

  useEffect(() => {
    handleAuth();
    getInfos();
  }, []);

  const handleSubmitNewArt = async () => {
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
      console.error("Erreur lors de la soumission des données.", error.message);
    }
  };

  // const handleSubmitCapture = async () => {
  //   try {
  //     if (selectedArtworkId !== null && artistSelect !== null) {
  //       const captureData = {
  //         user_id: user.id,
  //         artwork_id: selectedArtworkId,
  //       };

  //       await axios.post(
  //         `${import.meta.env.VITE_BACKEND_URL}/api/captures`,
  //         captureData
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Erreur lors de la soumission des données.", error.message);
  //   }
  // };

  const handleReturn = () => {
    switch (user.is_administrator) {
      case 1:
        return (
          <>
            <h2 className="admin-mode">Ajouter une œuvre</h2>

            <form className="content">
              <div className="parent-div">
                <div className="left-container">
                  <div className="align-div">
                    <p>
                      Nom de l'artiste <span className="red-span">*</span>
                    </p>
                    <input name="artistName" />
                  </div>
                  <div className="align-div">
                    <p>Nom de l'œuvre</p>
                    <input name="title" />
                  </div>
                  <div className="align-div">
                    <p>
                      Adresse <span className="red-span">*</span>
                    </p>
                    <input name="street" />
                  </div>
                  <div className="align-div">
                    <p>
                      Ville <span className="red-span">*</span>
                    </p>
                    <input name="city" />
                  </div>
                </div>
                <div className="right-container">
                  <div className="align-div">
                    <p>
                      Description de l'œuvre <span className="red-span">*</span>
                    </p>
                    <input name="description" className="desc-inp" />
                  </div>
                  <div className="align-div">
                    <p>
                      À propos de l'artiste
                      <span className="red-span"> (bonus)</span>
                    </p>
                    <input name="artistBio" className="about-inp" />
                  </div>
                </div>
              </div>
            </form>
            <Dropzone selectedArtworkId={selectedArtworkId} />
            <button
              type="button"
              className="admin-mode"
              onClick={handleSubmitNewArt}
            >
              Soumettre
            </button>
          </>
        );
      case 0:
        return (
          <>
            <h2 className="player-mode">Ajouter une capture</h2>

            <form className="content">
              <h3>1. Sélectionne l'auteur de l'œuvre </h3>
              <select
                onChange={(event) => setArtistSelect(event.target.value)}
                className="artist-list"
              >
                <option value="" disabled selected hidden>
                  Artistes
                </option>
                {artists.length > 0 &&
                  typeof artists[0].name !== "undefined" &&
                  artists.map(({ name, id }) => (
                    <option value={name} key={id}>
                      {name}
                    </option>
                  ))}
              </select>
              {artistSelect !== undefined ? (
                <div className="artwork-select">
                  <h3>2. Sélectionne l'œuvre capturée</h3>
                  {filteredArtwork.map((artwork) => (
                    <div key={artwork.id}>
                      <img
                        src={artwork.picture}
                        alt=""
                        className="artworks-img"
                      />
                      <input
                        type="checkbox"
                        checked={selectedArtworkId === artwork.id}
                        onChange={() => setSelectedArtworkId(artwork.id)}
                        className="checkbox"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
              {selectedArtworkId && artistSelect !== undefined ? (
                <>
                  <h3>3. Télécharge ta capture</h3>
                  <Dropzone selectedArtworkId={selectedArtworkId} />
                </>
              ) : null}
            </form>
          </>
        );
      default:
        return (
          <div className="register-button">
            <Link to="/inscription" className="link">
              <button type="button">S'inscrire pour jouer</button>
            </Link>
          </div>
        );
    }
  };

  return <div className="form-container">{handleReturn()}</div>;
}

export default MapForm;
