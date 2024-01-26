import { useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import NavBar from "../MainNavBars/NavBar";
import NavBarM from "../MainNavBars/NavBarM";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/Logo.svg";

import "./Layout.scss";
import UserLayout from "./UserLayout";

function Layout() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [activePage, setActivePage] = useState("accueil");
  const [isPlayerMode, setIsPlayerMode] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const { user, userMode } = useContext(AuthContext);

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
  }, [user]);

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
          {isAdminMode || isPlayerMode ? (
            <>
              <Outlet isPlayerMode={isPlayerMode} isAdminMode={isAdminMode} />
              <NavBarM
                activePage={activePage}
                isPlayerMode={isPlayerMode}
                isAdminMode={isAdminMode}
              />
            </>
          ) : (
            <>
              <UserLayout
                isPlayerMode={isPlayerMode}
                isAdminMode={isAdminMode}
                activePage={activePage}
                handleChangePage={handleChangePage}
              />
              <NavBar
                activePage={activePage}
                handleChangePage={handleChangePage}
                isPlayerMode={isPlayerMode}
                isAdminMode={isAdminMode}
              />
            </>
          )}
        </>
      ) : (
        <div>
          {isAdminMode || isPlayerMode ? (
            <div>
              <NavBar
                activePage={activePage}
                handleChangePage={handleChangePage}
                isPlayerMode={isPlayerMode}
                isAdminMode={isAdminMode}
              />
              <Outlet isPlayerMode={isPlayerMode} isAdminMode={isAdminMode} />
            </div>
          ) : (
            <div>
              <UserLayout
                isPlayerMode={isPlayerMode}
                isAdminMode={isAdminMode}
                activePage={activePage}
                handleChangePage={handleChangePage}
              />
              <NavBar
                activePage={activePage}
                handleChangePage={handleChangePage}
                isPlayerMode={isPlayerMode}
                isAdminMode={isAdminMode}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Layout;
