import PropTypes from "prop-types";
import "./NavBarSa.scss";

function NavBarSa({ activeComponent, handleActive }) {
  return (
    <nav className="navbar-sa">
      <ul>
        <li>
          <h3>
            <a
              href="#captures"
              className={activeComponent === "captures" ? "active" : ""}
              onClick={() => {
                handleActive("captures");
              }}
            >
              Captures
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a
              href="#new"
              className={activeComponent === "newWork" ? "active" : ""}
              onClick={() => {
                handleActive("newWork");
              }}
            >
              Nouvelles oeuvres
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a
              href="#reported"
              className={activeComponent === "reported" ? "active" : ""}
              onClick={() => {
                handleActive("reported");
              }}
            >
              Signalées
            </a>
          </h3>
        </li>
      </ul>
    </nav>
  );
}

NavBarSa.propTypes = {
  activeComponent: PropTypes.oneOf(["captures", "newWork", "reported"])
    .isRequired,
  handleActive: PropTypes.func.isRequired,
};

export default NavBarSa;
