import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import NavBar from "../components/NavBar";
import NavBarM from "../components/NavBarM";
import logo from "../assets/Logo.svg";

function Layout() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [activePage, setActivePage] = useState("accueil");

  const handleChangePage = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      {isMobile ? (
        <>
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-mobile" />
          </div>
          <Outlet />
          <NavBarM
            activePage={activePage}
            handleChangePage={handleChangePage}
          />
        </>
      ) : (
        <>
          <NavBar activePage={activePage} handleChangePage={handleChangePage} />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default Layout;
