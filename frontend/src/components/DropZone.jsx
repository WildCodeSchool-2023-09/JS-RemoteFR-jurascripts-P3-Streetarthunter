/* eslint-disable react/jsx-props-no-spreading */

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import Upload from "../assets/Upload.svg";
import "./DropZone.scss";

function DropZone() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      const formData = new FormData();
      formData.append("capture", file);
      formData.append("user_id", 123);
      formData.append("artwork_id", 20);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/captures`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCapturedImage(response.data.capture);
      setShowPopup(true);

      console.info(response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dropZone" {...getRootProps()}>
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
          {!showPopup && <p>Envoyer ma photo</p>}
        </>
      )}
      {showPopup && (
        <div className="confirmation-popup">
          <p>Votre photo a bien été ajoutée à la base de données !</p>
        </div>
      )}
    </div>
  );
}

export default DropZone;
