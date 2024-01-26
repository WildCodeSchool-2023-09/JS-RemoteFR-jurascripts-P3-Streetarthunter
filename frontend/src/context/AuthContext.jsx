import { createContext, useMemo, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ is_administrator: 0 });
  const [isPlayerMode, setIsPlayerMode] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

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
    if (user && !user.is_administrator) {
      console.info("player mode true");
      setIsPlayerMode(true);
      setIsAdminMode(false);
    } else {
      console.info("admin mode true");
      setIsPlayerMode(false);
      setIsAdminMode(true);
    }
    console.info(isPlayerMode);
  }, [setUser]);

  const userMemo = useMemo(
    () => ({
      user,
      setUser,
      handleAuth,
      isAdminMode,
      isPlayerMode,
    }),
    [user, setUser, handleAuth]
  );

  return (
    <AuthContext.Provider value={userMemo}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
