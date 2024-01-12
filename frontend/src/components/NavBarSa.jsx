import "./NavBarSa.scss";

function NavBarSa() {
  return (
    <nav className="navbar-sa">
      <ul>
        <li>
          <h3>
            <a href="#cap">Captures</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="#new">Nouvelles oeuvres</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="#report">Signalées</a>
          </h3>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarSa;
