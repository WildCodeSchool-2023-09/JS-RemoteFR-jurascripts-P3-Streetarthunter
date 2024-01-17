import { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.scss";

function Gallery() {
  const [artworks, setArtworks] = useState([]);

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
      <h2 className="gallery-title">Street Art</h2>
      <section className="gallery">
        {artworks
          ?.filter((artwork, index) => index < 10)
          .map((artwork, index) => (
            <img
              src={artwork.picture}
              key={artwork.id}
              alt={artwork.title}
              className={`gallery-picture${index}`}
            />
          ))}
      </section>
    </>
  );
}

export default Gallery;
