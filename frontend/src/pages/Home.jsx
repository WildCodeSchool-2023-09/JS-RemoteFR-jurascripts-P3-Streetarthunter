import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

import "./Home.scss";

function Home() {
  const { user: authUser, handleAuth, userMode } = useContext(AuthContext);
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    // Function to fetch the ranking from the backend
    const fetchRanking = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`
        );
        // Sort users based on points in descending order
        const sortedRanking = response.data.sort((a, b) => b.points - a.points);
        setRanking(sortedRanking.slice(0, 3)); // Take the top 3 users
      } catch (error) {
        console.error("Error fetching ranking:", error);
      }
    };

    fetchRanking(); // Call the function to fetch the ranking
    handleAuth(); // Make sure to call handleAuth after fetching the ranking
  }, []);

  return (
    <section className="home-page">
      <section>
        <div>
          <h2 className={authUser.is_administrator === 3 ? "" : userMode()}>
            Le street-art Késako ?
          </h2>
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
              <Link to="/galerie" className="link">
                <button type="button" className={userMode()}>
                  Découvrir la galerie...
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
        <h2 className={userMode()}>Comment jouer à notre jeu ?</h2>
        <div className="instructions">
          <div className="instruc">
            <h3 className={userMode()}>Suivez le guide !</h3>
            <p>
              Parcourez votre ville, trouvez les œuvres que d'autres joueurs ont
              déjà repérées, capturez-les et gagnez des points !
            </p>
            <p>
              Plus l'œuvre est difficile à trouver, plus le nombre de points à
              gagner est élevé !
            </p>
            <p>
              Progressez, obtenez des badges et devenez vous-même contributeur !
            </p>
            {/* Condition pour afficher le bouton en fonction de la connexion de l'utilisateur */}
            {authUser && authUser.id ? (
              <Link to="/carte" className="link">
                <button type="button" className={userMode()}>
                  Accéder à la carte
                </button>
              </Link>
            ) : (
              <Link to="/inscription" className="link">
                <button type="button" className={userMode()}>
                  S'inscrire
                </button>
              </Link>
            )}
          </div>
          <div className="ranking">
            <h3 className={userMode()}>Classement</h3>
            <div className="grid-ranking">
              {ranking.map((rankedUser, index) => (
                <p
                  key={rankedUser.id}
                  className={`rank-${index + 1} ${index === 0 && "rank-one"} ${
                    index === 1 && "rank-two"
                  } ${index === 2 && "rank-three"}`}
                >
                  {`${index + 1}. ${rankedUser.firstname}`}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
