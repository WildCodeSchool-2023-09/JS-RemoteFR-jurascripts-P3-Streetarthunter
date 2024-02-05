import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./Profile.scss";

function Profile() {
  const { user, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    handleAuth();
  }, []);

  const handleReturn = () => {
    switch (user.is_administrator0) {
      case 0: {
        return (
          <div className="profile-container">
            <h2 className={user.is_administrator === 0 ? "player-mode" : ""}>
              Profil
            </h2>

            <div className="card-content">
              <div className="avatar-container">
                <img src={user.avatar} alt="user avatar" />
                <p className="user-score">Score: {user.score}</p>
              </div>
              <div className="user-details">
                <p className="firstname">{user.pseudo}</p>
                <p>{user.username}</p>
                <p>
                  {user.firstname} {user.lastname}
                </p>
                <p>Classement: {user.ranking}</p>
              </div>

              <div className="bio">
                <p>{user.bio}</p>
              </div>
            </div>
          </div>
        );
      }
      default:
        return (
          <div className="access-denied">
            <p>Vous n'avez pas accès à cette page</p>
            <Link to="/connexion">
              <button type="button" className="button-yellow">
                Se connecter
              </button>
            </Link>
          </div>
        );
    }
  };
  return <div>{handleReturn()}</div>;
}

export default Profile;
