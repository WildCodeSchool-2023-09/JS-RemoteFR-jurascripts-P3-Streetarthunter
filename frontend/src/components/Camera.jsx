import React, { useState } from "react";
import CameraReact from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import CameraSVG from "../assets/Camera.svg";
import "./Camera.scss";

function Camera() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleTakePhoto = async (dataUri) => {
    try {
      const response = await fetch(`${backendUrl}/api/captures`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photo: dataUri }), // Envoyez la photo dans le corps de la requête.
      });

      const data = await response.json();

      // Faites quelque chose avec la réponse du serveur, si nécessaire.
      console.info(data);

      setIsCameraOpen(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la photo:", error);
    }
  };

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <div>
      {isCameraOpen ? (
        <div>
          <CameraReact onTakePhoto={handleTakePhoto} isFullscreen />
          <button type="button" onClick={closeCamera}>
            Fermer la caméra
          </button>
        </div>
      ) : (
        <div>
          <button
            className="camera-button"
            type="button"
            onClick={openCamera}
            onKeyDown={openCamera}
            style={{ cursor: "pointer" }}
          >
            <img src={CameraSVG} alt="Camera icon" className="Camera-Icon" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Camera;
