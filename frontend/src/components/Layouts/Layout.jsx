import { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import NavBar from "../MainNavBars/NavBar";
import NavBarM from "../MainNavBars/NavBarM";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/Logo.svg";

import "./Layout.scss";

function Layout() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [activePage, setActivePage] = useState("accueil");
  const [isPlayerMode, setIsPlayerMode] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { user, userMode, setUser } = useContext(AuthContext);

  const handleChangePage = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    if (user.is_administrator === 0) {
      setIsPlayerMode(true);
      setIsAdminMode(false);
    }
    if (user.is_administrator === 1) {
      setIsPlayerMode(false);
      setIsAdminMode(true);
    }
  }, [user, setUser]);
  const handleProfile = () => {
    switch (user.is_administrator) {
      case 3:
        return "Inscription";
      case 0:
        return "Profil";
      case 1:
        return "Tableau de bord";
      default:
        return "";
    }
  };
  const handleProfileLink = () => {
    switch (user.is_administrator) {
      case 3:
        return "/inscription";
      case 0:
        return "user/profil";
      case 1:
        return "/user/admin";
      default:
        return "";
    }
  };
  return (
    <div>
      {isMobile ? (
        <>
          <div className="logo-container">
            <img
              src={logo}
              alt="logo"
              className={
                isAdminMode || isPlayerMode ? userMode() : "logo-mobile"
              }
            />
          </div>

          <Outlet isPlayerMode={isPlayerMode} isAdminMode={isAdminMode} />
          <NavBarM
            activePage={activePage}
            isPlayerMode={isPlayerMode}
            isAdminMode={isAdminMode}
            handleProfileLink={handleProfileLink}
          />
        </>
      ) : (
        <div>
          <div>
            <NavBar
              activePage={activePage}
              handleChangePage={handleChangePage}
              isPlayerMode={isPlayerMode}
              isAdminMode={isAdminMode}
              handleProfile={handleProfile}
              handleProfileLink={handleProfileLink}
            />
            <Outlet isPlayerMode={isPlayerMode} isAdminMode={isAdminMode} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
