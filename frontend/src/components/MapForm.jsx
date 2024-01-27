import { useState } from "react";
import Dropzone from "./DropZone";

import "./MapForm.scss";

function MapForm() {
  const [userLogged, setUserLogged] = useState(false);

  const handleClick = () => {
    setUserLogged(true);
  };
  return (
    <div className="form-container">
      {userLogged ? (
        <>
          <h2 className="add-h2">Ajouter une oeuvre</h2>
          <Dropzone />
          <form className="content">
            <div className="parent-div">
              <div>
                <div className="align-div">
                  <p>
                    Nom de l'artiste <span className="cyan-span">*</span>
                  </p>
                  <input />
                </div>
                <div className="align-div">
                  <p>Nom de l'oeuvre</p>
                  <input />
                </div>
                <div className="align-div">
                  <p>
                    Adresse <span className="cyan-span">*</span>
                  </p>
                  <input />
                </div>
                <div className="align-div">
                  <p>
                    Ville <span className="cyan-span">*</span>
                  </p>
                  <input />
                </div>
              </div>
              <div>
                <div className="align-div">
                  <p>
                    Descritpion de l'oeuvre <span className="cyan-span">*</span>
                  </p>
                  <input className="desc-inp" />
                </div>
                <div className="align-div">
                  <p>
                    A propos de l'artiste
                    <span className="cyan-span"> (bonus)</span>
                  </p>
                  <input className="about-inp" />
                </div>
              </div>
            </div>
          </form>
          <button type="button" className="sub-button">
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
