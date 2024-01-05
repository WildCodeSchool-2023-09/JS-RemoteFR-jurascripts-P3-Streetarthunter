import "./styles/commons.scss";
import Map from "./components/Map";

function App() {
  return (
    <>
      <header className="App-header">
        <h1>Street Art Hunter</h1>
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
        <button type="button" className="button-yellow">
          3
        </button>
        <button type="button" className="button-cyan">
          2
        </button>
        <button type="button" className="button-red">
          1
        </button>
      </header>
      <Map />
    </>
  );
}

export default App;
