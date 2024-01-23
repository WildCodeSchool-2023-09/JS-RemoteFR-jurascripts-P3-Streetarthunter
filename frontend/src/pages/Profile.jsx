import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, handleAuth } = useContext(AuthContext);
  console.info(user);
  useEffect(() => {
    handleAuth();
  }, []);

  return <h2>Bienvenue sur la page profil!</h2>;
}

export default Profile;
