import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "./Gallery.scss";

function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const { user, userMode, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    handleAuth();
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/artworks`)
      .then((res) => setArtworks(res.data))
      .catch((err) =>
        console.error("Erreur lors de la récupération des données :", err)
      );
  }, []);

  return (
    <>
      <h2
        className={user.is_administrator === 3 ? "gallery-title" : userMode()}
      >
        Galerie
      </h2>
      <section className="gallery">
        {artworks
          ?.filter((_, index) => index < 14)
          .map((artwork) => (
            <picture key={artwork.id}>
              <img src={artwork.picture} alt={artwork.title} />
            </picture>
          ))}
      </section>
    </>
  );
}

export default Gallery;
