import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "../styles/modals.scss";

function Logout() {
  const { handleLogout, userMode } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <section className="backdrop">
      <div className="modal">
        <h2 className={userMode()}>
          Etes-vous sûr de vouloir vous déconnecter ?
        </h2>
        <div>
          <button
            type="button"
            className={userMode()}
            onClick={() => {
              handleLogout();
              navigate("/");
            }}
          >
            Me déconnecter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Logout;
