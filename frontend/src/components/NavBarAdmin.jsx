import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./NavBarAdmin.scss";

function NavBarAdmin({ activeSection }) {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 270) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-admin ${isNavFixed ? "fixed-navbar" : ""}`}>
      <ul>
        <li>
          <h3>
            <a
              href="#dashboard"
              className={activeSection === "dashboard" ? "active" : ""}
            >
              Tableau de bord
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a
              href="#users"
              className={activeSection === "users" ? "active" : ""}
            >
              Utilisateurs
            </a>
          </h3>
        </li>
        <li>
          <h3>
            <a
              href="#streetArt"
              className={activeSection === "streetArt" ? "active" : ""}
            >
              Street Art Hunter
            </a>
          </h3>
        </li>
      </ul>
    </nav>
  );
}

NavBarAdmin.propTypes = {
  activeSection: PropTypes.oneOf(["dashboard", "users", "streetArt", "artists"])
    .isRequired,
};

export default NavBarAdmin;
