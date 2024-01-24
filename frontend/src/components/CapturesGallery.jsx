import { useState, useEffect } from "react";
import axios from "axios";

function CapturesGallery() {
  const [captures, setCaptures] = useState([]);

  useEffect(() => {
    const fetchCaptures = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/captures`
        );
        console.info(response.data); // Assurez-vous que le champ 'capture' contient des valeurs correctes

        setCaptures(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des captures :", error);
      }
    };

    fetchCaptures();
  }, []);

  return (
    <div className="captures-gallery">
      {captures.map((capture) => (
        <div key={capture.id} className="capture-item">
          <p>{`User ID: ${capture.user_id}, Artwork ID: ${capture.artwork_id}`}</p>
          {/* Utilisez le champ 'capture' pour afficher l'image */}
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/captures/${
              capture.capture
            }`}
            alt="Capture"
          />
        </div>
      ))}
    </div>
  );
}

export default CapturesGallery;
