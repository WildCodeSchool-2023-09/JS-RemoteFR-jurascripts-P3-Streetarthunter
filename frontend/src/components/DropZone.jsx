import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import Upload from "../assets/Upload.svg";

import "./DropZone.scss";

// Fonction pour convertir un fichier en base64
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

function DropZone() {
  const [capturedImage, setCapturedImage] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      // Convertir le fichier en base64
      const base64Image = await convertFileToBase64(file);

      // Envoyez le fichier au serveur
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/captures`,
        { user_id: 123, artwork_id: 20, capture: base64Image },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Mise à jour de l'image capturée
      setCapturedImage(response.data.capture);

      console.info(response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className="dropZone" {...getRootProps()}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input {...getInputProps()} />
      {capturedImage ? (
        <img
          src={`data:image/jpeg;base64,${capturedImage}`}
          alt="Captured"
          className="Captured-Image"
        />
      ) : (
        <>
          <img src={Upload} alt="Upload icon" className="Upload-Icon" />
          <p>Envoyer ma photo</p>
        </>
      )}
    </div>
  );
}

export default DropZone;
