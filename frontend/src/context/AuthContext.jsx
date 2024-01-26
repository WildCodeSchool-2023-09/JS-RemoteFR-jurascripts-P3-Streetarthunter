import { createContext, useMemo, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ is_administrator: 3 });

  const handleAuth = async () => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      const decodeToken = jwtDecode(getToken);
      const userId = decodeToken.user_id;

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}`
        );
        setUser(data);
      } catch (error) {
        console.warn("Une erreur est survenue!", error);
      }
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  function userMode() {
    if (user.is_administrator === 0) {
      return "player-mode";
    }
    if (user.is_administrator === 1) {
      return "admin-mode";
    }
    return "";
  }
  // sert pour savoir si un utilisateur est connecté - retourne false si on est en mode "visiteur"

  const userMemo = useMemo(
    () => ({
      user,
      setUser,
      handleAuth,
      userMode,
    }),
    [user, setUser, handleAuth, userMode]
  );

  return (
    <AuthContext.Provider value={userMemo}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
