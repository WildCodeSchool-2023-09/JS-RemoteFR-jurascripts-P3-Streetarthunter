import NavBar from "../components/NavBar";
import "./Admin.scss";

function admin() {
  return (
    <>
      <NavBar />
      <div className="notif-h2-img">
        <h2 className="admin-h2">Notifications</h2>
        <img
          alt="ampoule"
          src="./src/assets/panel-admin/light-bulb-idea-svgrepo-com.svg"
        />
      </div>
      <div className="notif-parent-div">
        <div className="notif-grid-div notif-child-div-yellow">
          <p>12 Street Art en attente de validation</p>
          <img
            alt="Sablier"
            src="./src/assets/panel-admin/hourglass-not-done-svgrepo-com.svg"
          />
        </div>
        <div className="notif-grid-div notif-child-div-cyan">
          <p>3 Street Art sont portés disparus</p>
          <img
            alt="Carte"
            src="./src/assets/panel-admin/maps-and-flags-map-svgrepo-com.svg"
          />
        </div>
      </div>
      <h2 className="admin-h2">Utilisateurs</h2>
      <div className="uti-flex">
        <div className="uti-grid">
          <button type="button" className="uti-filter-button">
            Filtrer
          </button>
          <input
            className="uti-research-input"
            type="text"
            placeholder="Recherchez..."
          />
        </div>
      </div>
      <div className="profil-uti-parent">
        <div className="profil-uti-child">
          <img
            alt="avatar du profil"
            className="avatar-grid"
            src="./src/assets/panel-admin/avatar-svgrepo-com.svg"
          />
          <img
            alt="badge du profil"
            className="badge-grid"
            src="./src/assets/panel-admin/badge-award-svgrepo-com.svg"
          />
          <p className="pseudo-grid">Pseudo</p>
          <p className="name-grid">Prénom Nom</p>
          <p className="capture-grid">
            Capture <span className="capture-grid-red">12</span>
          </p>
          <p className="ranking-grid">
            Classement <span className="ranking-grid-red">203</span>
          </p>
          <p className="points-grid">
            Points <span className="points-grid-red">1255</span>
          </p>
        </div>
        <div className="profil-uti-child">
          <img
            alt="avatar du profil"
            className="avatar-grid"
            src="./src/assets/panel-admin/avatar-svgrepo-com.svg"
          />
          <img
            alt="badge du profil"
            className="badge-grid"
            src="./src/assets/panel-admin/badge-award-svgrepo-com.svg"
          />
          <p className="pseudo-grid">Pseudo</p>
          <p className="name-grid">Prénom Nom</p>
          <p className="capture-grid">
            Capture <span className="capture-grid-red">12</span>
          </p>
          <p className="ranking-grid">
            Classement <span className="ranking-grid-red">203</span>
          </p>
          <p className="points-grid">
            Poitns <span className="points-grid-red">1255</span>
          </p>
        </div>
        <div className="profil-uti-child">
          <img
            alt="avatar du profil"
            className="avatar-grid"
            src="./src/assets/panel-admin/avatar-svgrepo-com.svg"
          />
          <img
            alt="badge du profil"
            className="badge-grid"
            src="./src/assets/panel-admin/badge-award-svgrepo-com.svg"
          />
          <p className="pseudo-grid">Pseudo</p>
          <p className="name-grid">Prénom Nom</p>
          <p className="capture-grid">
            Capture <span className="capture-grid-red">12</span>
          </p>
          <p className="ranking-grid">
            Classement <span className="ranking-grid-red">203</span>
          </p>
          <p className="points-grid">
            Poitns <span className="points-grid-red">1255</span>
          </p>
        </div>
        <div className="profil-uti-child">
          <img
            alt="avatar du profil"
            className="avatar-grid"
            src="./src/assets/panel-admin/avatar-svgrepo-com.svg"
          />
          <img
            alt="badge du profil"
            className="badge-grid"
            src="./src/assets/panel-admin/badge-award-svgrepo-com.svg"
          />
          <p className="pseudo-grid">Pseudo</p>
          <p className="name-grid">Prénom Nom</p>
          <p className="capture-grid">
            Capture <span className="capture-grid-red">12</span>
          </p>
          <p className="ranking-grid">
            Classement <span className="ranking-grid-red">203</span>
          </p>
          <p className="points-grid">
            Poitns <span className="points-grid-red">1255</span>
          </p>
        </div>
        <div className="profil-uti-child">
          <img
            alt="avatar du profil"
            className="avatar-grid"
            src="./src/assets/panel-admin/avatar-svgrepo-com.svg"
          />
          <img
            alt="badge du profil"
            className="badge-grid"
            src="./src/assets/panel-admin/badge-award-svgrepo-com.svg"
          />
          <p className="pseudo-grid">Pseudo</p>
          <p className="name-grid">Prénom Nom</p>
          <p className="capture-grid">
            Capture <span className="capture-grid-red">12</span>
          </p>
          <p className="ranking-grid">
            Classement <span className="ranking-grid-red">203</span>
          </p>
          <p className="points-grid">
            Poitns <span className="points-grid-red">1255</span>
          </p>
        </div>
        <div className="profil-uti-child">
          <img
            alt="avatar du profil"
            className="avatar-grid"
            src="./src/assets/panel-admin/avatar-svgrepo-com.svg"
          />
          <img
            alt="badge du profil"
            className="badge-grid"
            src="./src/assets/panel-admin/badge-award-svgrepo-com.svg"
          />
          <p className="pseudo-grid">Pseudo</p>
          <p className="name-grid">Prénom Nom</p>
          <p className="capture-grid">
            Capture <span className="capture-grid-red">12</span>
          </p>
          <p className="ranking-grid">
            Classement <span className="ranking-grid-red">203</span>
          </p>
          <p className="points-grid">
            Poitns <span className="points-grid-red">1255</span>
          </p>
        </div>
      </div>
      <h2 className="admin-h2">Street Art</h2>
      <div className="sa-grid">
        <img
          alt="Street Art"
          className="img-grid"
          src="./src/assets/panel-admin/strafari-street-art-hunter.webp"
        />
        <p className="posted-grid">
          Posté par{" "}
          <span className="posted-grid-red">Pseudo de l'utilisateur</span>
        </p>
        <button type="button" className="validate-grid">
          Valider
        </button>
        <button type="button" className="refuse-grid">
          Refuser
        </button>
        <img
          alt="Street Art"
          className="original-img-grid"
          src="./src/assets/panel-admin/strafari-street-art-hunter.webp"
        />
        <p className="original-work-grid">Oeuvre Originale</p>
      </div>
      <h2 className="admin-h2">Ajouter un artiste</h2>
      <p>Logo de téléchargemnt</p>
      <p>Télécharger une photo</p>
      <form className="add-art-form-grid">
        <div className="name-art-grid">
          <p>
            Nom de l'artiste <span className="name-red-span">*</span>
          </p>
          <input />
        </div>
        <div className="about-art-grid">
          <p>A propos de l'artiste</p>
          <input className="about-art-pad" />
        </div>
      </form>
      <button type="button" className="add-art-button">
        Ajouter
      </button>
    </>
  );
}

export default admin;
