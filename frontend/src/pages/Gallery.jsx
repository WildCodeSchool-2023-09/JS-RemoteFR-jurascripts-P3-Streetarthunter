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
    <section className="gallery">
      <h1>Gallery</h1>

      {artworks
        ?.filter((artwork, index) => index < 10)
        .map((artwork) => (
          <img src={artwork.picture} key={artwork.id} alt={artwork.title} />
        ))}
    </section>
  );
}

export default Gallery;
