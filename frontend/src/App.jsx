import { useMediaQuery } from "@react-hook/media-query";

import NavBar from "./components/NavBar";
import NavBarM from "./components/NavBarM";
import "./styles/commons.scss";

function App() {
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        <>
          <header className="App-header">
            <h2>Le site des chasseurs d'art urbain !</h2>
            <h3>En cours de développement...</h3>
            <p>
              Passionnés de street-art, patientez encore quelques semaines pour
              jouer au seul jeu qui vous permettra de combiner art, compétition
              et orientation !
            </p>
            <br />
            <p className="small-text">Un site CreaScript</p>
            <br />
          </header>
          <NavBarM />
        </>
      ) : (
        <div>
          <NavBar />
          <header className="App-header">
            <h2>Le site des chasseurs d'art urbain !</h2>
            <h3>En cours de développement...</h3>
            <p>
              Passionnés de street-art, patientez encore quelques semaines pour
              jouer au seul jeu qui vous permettra de combiner art, compétition
              et orientation !
            </p>
            <br />
            <p className="small-text">Un site CreaScript</p>
            <br />
          </header>
        </div>
      )}
    </div>
  );
}

export default App;
