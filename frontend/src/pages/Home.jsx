import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {
  return (
    <section className="home-page">
      <section>
        <div>
          <h2>Le street-art Késako ?</h2>
          <div className="kesako-content">
            <div>
              <p>
                Le street-art évoque souvent l'image d'un jeune homme une bombe
                de peinture à la main... Mais le graffiti ou le "freehand" n'est
                qu'une façon de pratiquer le street-art !
              </p>
              <p>
                Peu importe la technique, le street-art est avant tout une forme
                d'expression artistique qui reprend ses droits sur la ville. Et
                ses pratiquants se sont largement féminisés ces dernières
                décennies.
              </p>
              <Link to="/galery">
                <button type="button" className="button-yellow">
                  Découvrir des artistes...
                </button>
              </Link>
            </div>
            <div className="img">
              <img
                src="https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg"
                alt="Peinture murale d'un portrait De Femme"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Comment jouer à notre jeu ?</h2>
        <div className="instructions">
          <div className="instruc">
            <h3>Suivez le guide !</h3>
            <p>
              Parcourez votre ville, trouvez les oeuvres que d'autres joueurs
              ont déjà repérées, capturez-les et gagnez des points !
            </p>
            <p>
              Plus l'oeuvre est difficile à trouver, plus le nombre de points à
              gagner est élevé !
            </p>
            <p>
              Progressez, obtenez des badges et devenez vous-même contributeur !
            </p>
            <Link to="/register">
              <button type="button" className="button-yellow">
                S'inscrire
              </button>
            </Link>
          </div>
          <div className="ranking">
            <h3>Classement</h3>
            <div className="grid-ranking">
              <p className="rank-one">1. Jean</p>
              <p className="rank-two">2. Paul </p>
              <p className="rank-three">3. Pierre</p>
              <div className="rank-four">
                <p>3. André</p>
                <p>5. Danny</p>
                <p>6. Doug</p>
                <p>7.Pierre</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
