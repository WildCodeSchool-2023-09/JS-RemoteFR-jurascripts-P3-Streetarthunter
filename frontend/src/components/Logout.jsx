import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "../styles/modals.scss";

function Logout() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("structureToken");
    setUser({});
    navigate("/");
  };

  return (
    <section className="backdrop">
      <div className="modal">
        <h2>Etes-vous sûr de vouloir vous déconnecter ?</h2>
        <button
          type="button"
          className="button-yellow"
          onClick={() => {
            handleLogout();
          }}
        >
          Me déconnecter
        </button>
      </div>
    </section>
  );
}

export default Logout;
