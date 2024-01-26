import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

import "./Profile.scss";

function Profile() {
  const { user, handleAuth } = useContext(AuthContext);
  console.info(user);
  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <div className="profile-container">
      <h3>Mon Profil</h3>

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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            voluptate nobis earum ratione soluta laboriosam similique facere
            amet fuga corrupti!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
