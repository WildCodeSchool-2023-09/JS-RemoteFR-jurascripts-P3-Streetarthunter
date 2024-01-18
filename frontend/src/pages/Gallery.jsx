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
          ?.filter((_, index) => index < 14)
          .map((artwork) => (
            <picture key={artwork.id}>
              <img src={artwork.picture} alt={artwork.title} loading="lazy" />
            </picture>
          ))}
      </section>
    </>
  );
}

export default Gallery;
