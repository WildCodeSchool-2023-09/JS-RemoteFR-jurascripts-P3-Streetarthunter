import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import "./Admin.scss";
import NavBar from "../components/NavBar";
import NavBarAdmin from "../components/NavBarAdmin";
import NavBarSa from "../components/NavBarSa";
import MapAndFlag from "../assets/panel-admin/maps-and-flags-map-svgrepo-com.svg";
import Avatar from "../assets/panel-admin/avatar-svgrepo-com.svg";
import Hourglass from "../assets/panel-admin/hourglass-not-done-svgrepo-com.svg";
import badge from "../assets/panel-admin/badge-award-svgrepo-com.svg";
import strafari from "../assets/panel-admin/strafari-street-art-hunter.webp";
import light from "../assets/panel-admin/light-bulb-idea-svgrepo-com.svg";
import download from "../assets/panel-admin/download-svgrepo-com.svg";

function admin() {
  const isMobile = useMediaQuery("only screen and (min-width: 600px)");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeComponent, setActiveComponent] = useState("captures");
  const dashboardRef = useRef(null);
  const usersRef = useRef(null);
  const streetArtRef = useRef(null);
  const artistsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (
        offset >= dashboardRef.current.offsetTop &&
        offset < usersRef.current.offsetTop
      ) {
        setActiveSection("dashboard");
      } else if (
        offset >= usersRef.current.offsetTop &&
        offset < streetArtRef.current.offsetTop
      ) {
        setActiveSection("users");
      } else if (
        offset >= streetArtRef.current.offsetTop &&
        offset < artistsRef.current.offsetTop
      ) {
        setActiveSection("streetArt");
      } else if (offset >= artistsRef.current.offsetTop) {
        setActiveSection("artists");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleActive = (section) => {
    setActiveComponent(section);
  };

  return (
    <>
      <NavBar />
      {isMobile ? (
        <>
          <NavBarAdmin activeSection={activeSection} />
          <section ref={dashboardRef}>
            <div className="notif-h2-img" id="dashboard">
              <h2 className="border-none-h2">Notifications</h2>
              <img alt="ampoule" src={light} />
            </div>
            <div className="notif-parent-div">
              <div className="notif-grid-div notif-child-div-yellow">
                <p>12 Street Art en attente de validation</p>
                <img alt="Sablier" src={Hourglass} />
              </div>
              <div className="notif-grid-div notif-child-div-cyan">
                <p>3 Street Art sont portés disparus</p>
                <img alt="Carte" src={MapAndFlag} />
              </div>
            </div>
          </section>
          <section ref={usersRef}>
            <h2 className="admin-h2" id="users">
              Utilisateurs
            </h2>
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
                  src={Avatar}
                />
                <img alt="badge du profil" className="badge-grid" src={badge} />
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
                  src={Avatar}
                />
                <img alt="badge du profil" className="badge-grid" src={badge} />
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
                  src={Avatar}
                />
                <img alt="badge du profil" className="badge-grid" src={badge} />
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
                  src={Avatar}
                />
                <img alt="badge du profil" className="badge-grid" src={badge} />
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
                  src={Avatar}
                />
                <img alt="badge du profil" className="badge-grid" src={badge} />
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
                  src={Avatar}
                />
                <img alt="badge du profil" className="badge-grid" src={badge} />
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
          </section>
          <section ref={streetArtRef}>
            <h2 className="admin-h2" id="streetArt">
              Street Art
            </h2>
            <NavBarSa
              activeComponent={activeComponent}
              handleActive={handleActive}
            />
            <div className="sa-grid">
              <img alt="Street Art" className="img-grid" src={strafari} />
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
                src={strafari}
              />
              <p className="original-work-grid">Oeuvre Originale</p>
            </div>
          </section>
          <section ref={artistsRef}>
            <h2 className="admin-h2" id="artists">
              Ajouter un artiste
            </h2>
            <img src={download} alt="download" className="download-art-img" />
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
          </section>
        </>
      ) : (
        <h3 className="admin-mobile-h2">
          Cette page est indisponible sur mobile, veuillez accéder à la page
          administrateur depuis un ordinateur
        </h3>
      )}
    </>
  );
}

export default admin;