import { useEffect, useRef, useState, useContext } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "../styles/commons.scss";
import "./Admin.scss";
import NavBarAdmin from "../components/NavBarAdmin";
import NavBarSa from "../components/NavBarSa";
import MapAndFlag from "../assets/panel-admin/maps-and-flags-map-svgrepo-com.svg";
import Avatar from "../assets/panel-admin/avatar-svgrepo-com.svg";
import Hourglass from "../assets/panel-admin/hourglass-not-done-svgrepo-com.svg";
import badge from "../assets/panel-admin/badge-award-svgrepo-com.svg";
import light from "../assets/panel-admin/light-bulb-idea-svgrepo-com.svg";
import CaptureAdmin from "../components/CaptureAdmin";
import FilterUsersAdmin from "../components/FilterUsersAdmin";
import NewArtAdmin from "../components/NewArtAdmin";
import ReportedArtAdmin from "../components/ReportedArtAdmin";
import ValidateCaptureAdmin from "../components/ValidateCaptureAdmin";

function admin() {
  const isMobile = useMediaQuery("only screen and (min-width: 600px)");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeComponent, setActiveComponent] = useState("captures");
  const [players, setPlayers] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [userIndex, setUserIndex] = useState(0);
  const [userSlideResult, setUserSlideResult] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [toggleUserFilter, setToggleUserFilter] = useState(false);
  const [initialOffset, setInitialOffset] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [artCapture, setArtCapture] = useState([]);
  const [toggleModalCapture, setToggleModalCapture] = useState(false);
  const [points, setPoints] = useState(0);
  const [isNewArtwork, setIsNewArtwork] = useState(false);
  const [isHardToFind, setIsHardToFind] = useState(false);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [pointsUserId, setPointsUserId] = useState([]);
  const [notifCaptureCount, setNotifCaptureCount] = useState(0);

  const dashboardRef = useRef(null);
  const usersRef = useRef(null);
  const streetArtRef = useRef(null);

  const { user, handleAuth, userMode } = useContext(AuthContext);

  useEffect(() => {
    handleAuth();
  }, []);

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
      } else if (offset >= streetArtRef.current.offsetTop) {
        setActiveSection("streetArt");
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

  useEffect(() => {
    if (!userSearch) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
        .then((response) => {
          const usersPlayer = response.data.filter(
            () => !players.is_administrator
          );
          setPlayers(usersPlayer);
          setUserSlideResult(Math.ceil(usersPlayer.length));
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des utilisateurs:",
            error
          );
        });
    } else {
      const filteredUser = players.filter(
        (player) =>
          player.pseudo.toLowerCase().includes(userSearch.toLowerCase()) ||
          player.firstname.toLowerCase().includes(userSearch.toLowerCase()) ||
          player.lastname.toLowerCase().includes(userSearch.toLowerCase())
      );
      setPlayers(filteredUser);
      setUserSlideResult(Math.ceil(filteredUser.length));
    }
  }, [players, userSearch]);

  const onChangeUser = (e) => {
    setUserSearch(e.target.value);
    setUserIndex(0);
    setCurrentSlide(1);
  };

  const userCurrent = players
    .sort((a, b) => {
      if (sortOrder === "ascPseudo") {
        return a.pseudo.localeCompare(b.pseudo);
      }
      if (sortOrder === "descPseudo") {
        return b.pseudo.localeCompare(a.pseudo);
      }
      if (sortOrder === "ascPoints") {
        return a.points - b.points;
      }
      if (sortOrder === "descPoints") {
        return b.points - a.points;
      }
      if (sortOrder === "ascRank") {
        return a.ranking - b.ranking;
      }
      if (sortOrder === "descRank") {
        return b.ranking - a.ranking;
      }
      if (sortOrder === null) {
        return null;
      }
      return null;
    })
    .slice(userIndex, userIndex + 6);

  const nextUsersSlide = () => {
    setUserIndex((index) => Math.min(index + 6, players.length));
  };

  const prevUsersSlide = () => {
    setUserIndex((index) => Math.max(index - 6, 0));
  };

  const nextCurrentSlide = () => {
    setCurrentSlide((index) => Math.min(index + 1));
  };

  const prevCurrentSlide = () => {
    setCurrentSlide((index) => Math.max(index - 1));
  };

  const handleClickFilter = () => {
    setInitialOffset(window.scrollY);
    setToggleUserFilter(!toggleUserFilter);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (initialOffset !== null) {
        const currentOffset = window.scrollY;
        const scrollDifference = Math.abs(currentOffset - initialOffset);

        if (scrollDifference >= 200) {
          setToggleUserFilter(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialOffset]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/captures`, {
        params: {
          general_gallery: true,
        },
      })
      .then((response) => {
        const filteredCaptures = response.data.filter(
          (capture) => capture.artwork?.reported !== true
        );
        setArtCapture(filteredCaptures);
        setNotifCaptureCount(filteredCaptures.length);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des captures:", error);
      });
  }, []);

  const handleNewArtworkCheck = () => {
    setIsNewArtwork(!isNewArtwork);
    setPoints((prevPoints) =>
      isNewArtwork ? prevPoints - 40 : prevPoints + 40
    );
  };

  const handleHardToFindCheck = () => {
    setIsHardToFind(!isHardToFind);
    setPoints((prevPoints) =>
      isHardToFind ? prevPoints - 40 : prevPoints + 40
    );
  };

  const handleAllFieldsFilledCheck = () => {
    setIsAllFieldsFilled(!isAllFieldsFilled);
    setPoints((prevPoints) =>
      isAllFieldsFilled ? prevPoints - 20 : prevPoints + 20
    );
  };

  const userId = (id) => {
    setPointsUserId(id);
  };

  const handleValidateButtonClick = () => {
    setPoints((prevPoints) => prevPoints + 100);
    const totalPoints =
      points + players.find((player) => player.id === pointsUserId).points;

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${pointsUserId}`, {
        points: totalPoints,
      })
      .then((response) => {
        setToggleModalCapture(false);
        console.info("Points ajoutés avec succès !", response);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des points:", error);
      });
  };

  const handleReturn = () => {
    switch (user.is_administrator) {
      case 1: {
        return (
          <section className="admin-page">
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
                      <p>
                        {notifCaptureCount} Street Art en attente de validation
                      </p>
                      <img alt="Sablier" src={Hourglass} />
                    </div>
                    <div className="notif-grid-div notif-child-div-cyan">
                      <p>3 Street Art sont portés disparus</p>
                      <img alt="Carte" src={MapAndFlag} />
                    </div>
                  </div>
                </section>
                {toggleUserFilter && (
                  <FilterUsersAdmin
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    setToggleUserFilter={setToggleUserFilter}
                  />
                )}
                <section ref={usersRef}>
                  <h2 className="admin-h2" id="users">
                    Utilisateurs
                  </h2>
                  <form className="uti-flex">
                    <div className="uti-grid">
                      <button
                        type="button"
                        className="button-red"
                        onClick={() => {
                          handleClickFilter();
                        }}
                      >
                        Filtrer
                      </button>
                      <input
                        className="uti-research-input"
                        type="text"
                        placeholder="Recherchez..."
                        value={userSearch}
                        onChange={onChangeUser}
                      />
                    </div>
                  </form>
                  <div className="profil-uti-parent">
                    {userCurrent.map((userC) => (
                      <div key={userC.id} className="profil-uti-child">
                        <img
                          alt="avatar du profil"
                          className="avatar-grid"
                          src={Avatar}
                        />
                        <img
                          alt="badge du profil"
                          className="badge-grid"
                          src={badge}
                        />
                        <p className="pseudo-grid">{userC.pseudo}</p>
                        <p className="name-grid">
                          {userC.firstname} {userC.lastname}
                        </p>
                        <p className="capture-grid">
                          Capture <span className="capture-grid-red">12</span>
                        </p>
                        <p className="ranking-grid">
                          Classement{" "}
                          <span className="ranking-grid-red">
                            {userC.ranking}
                          </span>
                        </p>
                        <p className="points-grid">
                          Points{" "}
                          <span className="points-grid-red">
                            {userC.points}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="uti-btn">
                    <div className="flex-div-users-prev">
                      {userIndex > 0 && (
                        <button
                          type="button"
                          className="button-red grid-btn-users-prev"
                          onClick={() => {
                            prevUsersSlide();
                            prevCurrentSlide();
                          }}
                        >
                          Précédent
                        </button>
                      )}
                    </div>
                    <p className="grid-p-users">
                      Pages : {currentSlide} / {Math.round(userSlideResult / 6)}
                    </p>
                    <div className="flex-div-users-next">
                      {userIndex < players.length - 4 && (
                        <button
                          type="button"
                          className="button-red grid-btn-users-next"
                          onClick={() => {
                            nextUsersSlide();
                            nextCurrentSlide();
                          }}
                        >
                          Suivant
                        </button>
                      )}
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
                  {activeComponent === "captures" && (
                    <CaptureAdmin
                      artCapture={artCapture}
                      setToggleModalCapture={setToggleModalCapture}
                      userId={userId}
                    />
                  )}
                  {activeComponent === "newWork" && <NewArtAdmin />}
                  {activeComponent === "reported" && <ReportedArtAdmin />}
                  {toggleModalCapture === true && (
                    <ValidateCaptureAdmin
                      setToggleModalCapture={setToggleModalCapture}
                      handleNewArtworkCheck={handleNewArtworkCheck}
                      handleHardToFindCheck={handleHardToFindCheck}
                      handleAllFieldsFilledCheck={handleAllFieldsFilledCheck}
                      handleValidateButtonClick={handleValidateButtonClick}
                      isNewArtwork={isNewArtwork}
                      isHardToFind={isHardToFind}
                      isAllFieldsFilled={isAllFieldsFilled}
                      pointsUserId={pointsUserId}
                    />
                  )}
                </section>
              </>
            ) : (
              <h3 className="admin-mobile-h2">
                Cette page est indisponible sur mobile, veuillez accéder à la
                page administrateur depuis un ordinateur
              </h3>
            )}
          </section>
        );
      }
      default:
        return (
          <div className="access-denied">
            <p>Vous n'avez pas accès à cette page</p>
            <Link to="/connexion">
              <button type="button" className={userMode()}>
                Se connecter
              </button>
            </Link>
          </div>
        );
    }
  };
  return <div>{handleReturn()}</div>;
}

export default admin;
