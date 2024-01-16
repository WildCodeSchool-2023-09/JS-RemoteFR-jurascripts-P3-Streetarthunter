import { useDropzone } from "react-dropzone";
import axios from "axios";
import Upload from "../assets/Upload.svg";

import "./DropZone.scss";

function DropZone() {
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    // Créez un objet FormData pour envoyer le fichier au serveur
    const formData = new FormData();
    formData.append("picture", file);

    try {
      // Envoyez le fichier au serveur
      const response = await axios.post("URL_DU_ENDPOINT_API", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Faites quelque chose avec la réponse du serveur si nécessaire
      console.info(response.data);
    } catch (error) {
      // Gérez les erreurs d'envoi
      console.error("Erreur lors de l'envoi du fichier", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div
      style={{ border: "2px solid #ccc", padding: "20px", textAlign: "center" }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...getRootProps()}
    >
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getInputProps()}
      />
      <img src={Upload} alt="Upload icon" className="Upload-Icon" />
      <p>Télécharger ma photo</p>
    </div>
  );
}

export default DropZone;
