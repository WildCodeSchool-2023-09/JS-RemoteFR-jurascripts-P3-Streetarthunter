import { useMediaQuery } from "@react-hook/media-query";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NavBarM from "./components/NavBarM";
import "./styles/commons.scss";
import logo from "./assets/Logo.svg";

function App() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        <>
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-mobile" />
          </div>
          <Home />
          <NavBarM />
        </>
      ) : (
        <div>
          <NavBar />
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
