import "./NavBarAdmin.scss";

function NavBarAdmin() {
  return (
    <nav className="navbar-admin">
      <ul>
        <li>
          <h3>
            <a href="#notif">Tableau de bord</a>
          </h3>
        </li>
        <li>
          <a href="#uti">
            <h3>Utilisateurs</h3>
          </a>
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
