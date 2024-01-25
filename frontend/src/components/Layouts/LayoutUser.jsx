import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { AuthContext } from "../../context/AuthContext";
import NavBar from "../MainNavBars/NavBar";
import NavBarM from "../MainNavBars/NavBarM";
import logo from "../../assets/Logo.svg";
import "./LayoutUser.scss";

function LayoutUser() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [activePage, setActivePage] = useState("accueil");
  const handleChangePage = (page) => {
    setActivePage(page);
  };
  const { isPlayerMode, isAdminMode } = useContext(AuthContext);
  console.info(isPlayerMode);
  return (
    <div>
      {isMobile ? (
        <>
          <div className="logo-container">
            <img
              src={logo}
              alt="logo"
              className={isPlayerMode ? "player-mode" : "logo-mobile"}
            />
          </div>
          <Outlet />
          <NavBarM
            activePage={activePage}
            handleChangePage={handleChangePage}
            isAdminMode={isAdminMode}
            isPlayerMode={isPlayerMode}
          />
        </>
      ) : (
        <>
          <NavBar
            activePage={activePage}
            handleChangePage={handleChangePage}
            isAdminMode={isAdminMode}
            isPlayerMode={isPlayerMode}
          />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default LayoutUser;
