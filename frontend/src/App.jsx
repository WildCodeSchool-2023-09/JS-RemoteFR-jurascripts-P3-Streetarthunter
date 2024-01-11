import { useMediaQuery } from "@react-hook/media-query";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NavBarM from "./components/NavBarM";
import "./styles/commons.scss";

function App() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        <>
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
