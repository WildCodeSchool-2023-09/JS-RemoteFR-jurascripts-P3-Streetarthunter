import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    handleAuth();
  }, []);

  console.info(user);

  return <h2>Bienvenue sur la page profil!</h2>;
}

export default Profile;
