import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <h2 className={user.is_administrator === 0 ? "player-mode" : ""}>Profil</h2>
  );
}

export default Profile;
