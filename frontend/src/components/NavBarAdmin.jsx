import { useEffect, useState } from "react";
import "./NavBarAdmin.scss";

function NavBarAdmin() {
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
            <a href="#notif">Tableau de bord</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="#uti">Utilisateurs</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="#sa">Street Art Hunter</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="#art">Artistes</a>
          </h3>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarAdmin;
