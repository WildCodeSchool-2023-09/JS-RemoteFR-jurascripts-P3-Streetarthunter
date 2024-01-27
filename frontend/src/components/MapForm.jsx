import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Importez la fonction v4 de uuid
import Dropzone from "./DropZone";
import "./MapForm.scss";

function MapForm() {
  const [userLogged, setUserLogged] = useState(false);
  const [formData, setFormData] = useState({
    id: uuidv4(), // Générez un nouvel ID automatiquement
    artistName: "",
    title: "",
    street: "",
    city: "",
    description: "",
    artistBio: "",
  });

  const handleClick = () => {
    setUserLogged(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateJson = (data) => {
    const requiredFields = [
      "id",
      "artistName",
      "title",
      "street",
      "city",
      "description",
      "artistBio",
    ];

    for (const field of requiredFields) {
      if (!(field in data)) {
        console.error(`Le champ ${field} est manquant dans le fichier JSON.`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    try {
      if (!validateJson(formData)) {
        console.error(
          "Le formulaire ne correspond pas au format JSON attendu."
        );
        return;
      }

      const response = await axios.post(
        `${process.env.VITE_BACKEND_URL}/api/artworks`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Traitement en cas de succès, par exemple, rediriger l'utilisateur ou effectuer d'autres actions
        console.info("Formulaire soumis avec succès !");
      } else {
        // Traitement en cas d'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        console.error("Erreur lors de la soumission du formulaire");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire", error);
    }
  };

  return (
    <div className="form-container">
      {userLogged ? (
        <>
          <h2 className="add-h2">Ajouter une oeuvre</h2>
          <Dropzone />
          <form className="content">
            <div className="parent-div">
              <div className="left-container">
                <div className="align-div">
                  <p>
                    Nom de l'artiste <span className="cyan-span">*</span>
                  </p>
                  <input name="artistName" onChange={handleInputChange} />
                </div>
                <div className="align-div">
                  <p>Nom de l'oeuvre</p>
                  <input name="title" onChange={handleInputChange} />
                </div>
                <div className="align-div">
                  <p>
                    Adresse <span className="cyan-span">*</span>
                  </p>
                  <input name="street" onChange={handleInputChange} />
                </div>
                <div className="align-div">
                  <p>
                    Ville <span className="cyan-span">*</span>
                  </p>
                  <input name="city" onChange={handleInputChange} />
                </div>
              </div>
              <div className="right-container">
                <div className="align-div">
                  <p>
                    Descritpion de l'oeuvre <span className="cyan-span">*</span>
                  </p>
                  <input
                    name="description"
                    className="desc-inp"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="align-div">
                  <p>
                    À propos de l'artiste
                    <span className="cyan-span"> (bonus)</span>
                  </p>
                  <input
                    name="artistBio"
                    className="about-inp"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </form>
          <button type="button" className="sub-button" onClick={handleSubmit}>
            Soumettre
          </button>
        </>
      ) : (
        <button type="button" onClick={handleClick} className="reg-button">
          S'inscrire pour jouer
        </button>
      )}
    </div>
  );
}

export default MapForm;
