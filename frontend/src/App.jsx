import NavBar from "./components/NavBar";
import "./styles/commons.scss";
import Map from "./components/Map";

function App() {
  return (
    <>
      <NavBar />
      <header className="App-header">
        <h2>Le site des chasseurs d'art urbain !</h2>
        <h3>En cours de développement...</h3>
        <p>
          Passionnés de street-art, patientez encore quelques semaines pour
          jouer au seul jeu qui vous permettra de combiner art, compétition et
          orientation !
        </p>
        <br />
        <p className="small-text">Un site CreaScript</p>
        <br />
      </header>
      <Map />
    </>
  );
}

export default App;
