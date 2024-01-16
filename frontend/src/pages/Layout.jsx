import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import NavBar from "../components/NavBar";
import NavBarM from "../components/NavBarM";

function Layout() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        <>
          <Outlet />
          <NavBarM />
        </>
      ) : (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default Layout;
