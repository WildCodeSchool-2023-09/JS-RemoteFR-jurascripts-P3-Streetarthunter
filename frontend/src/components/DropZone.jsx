import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import Upload from "../assets/Upload.svg";

import "./DropZone.scss";

function DropZone() {
  const [capturedImage, setCapturedImage] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      const formData = new FormData();
      formData.append("capture", file);
      formData.append("user_id", 123);
      formData.append("artwork_id", 20);

      // Envoyer le fichier au serveur avec Multer
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/captures`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Mise à jour de l'image capturée si nécessaire
      setCapturedImage(response.data.capture);

      // Faites quelque chose avec la réponse du serveur si nécessaire
      console.info(response.data);
    } catch (error) {
      // Gérer les erreurs d'envoi
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
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${capturedImage}`}
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
