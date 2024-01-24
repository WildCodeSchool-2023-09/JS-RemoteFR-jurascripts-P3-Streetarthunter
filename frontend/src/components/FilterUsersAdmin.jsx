import "./FilterUsersAdmin.scss";

function FilterUsersAdmin() {
  return (
    <section className="fliter-users-section">
      <h2>Filtrer</h2>
      <div className="fliter-users-div">
        <button className="border-none" type="button">
          <p>Ordre Alphabétique</p>
        </button>
        <button className="border-none" type="button">
          <p>Désordre Alphabétique</p>
        </button>
        <button className="border-none" type="button">
          <p>Ordre Points</p>
        </button>
        <button className="border-none" type="button">
          <p>Désordre Points</p>
        </button>
        <button className="border-none" type="button">
          <p>Ordre Classements</p>
        </button>
        <button type="button">
          <p>Désordre Classements</p>
        </button>
      </div>
    </section>
  );
}

export default FilterUsersAdmin;
