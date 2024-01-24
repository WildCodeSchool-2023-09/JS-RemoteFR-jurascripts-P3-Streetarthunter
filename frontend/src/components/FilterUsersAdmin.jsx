import PropTypes from "prop-types";
import "./FilterUsersAdmin.scss";

function FilterUsersAdmin({ setSortOrder }) {
  const handleSortAscPseudo = () => {
    setSortOrder("asc");
  };

  const handleSortDescPseudo = () => {
    setSortOrder("desc");
  };

  return (
    <section className="fliter-users-section">
      <h2>Filtrer</h2>
      <div className="fliter-users-div">
        <button
          className="border-none"
          type="button"
          onClick={() => {
            handleSortAscPseudo();
          }}
        >
          <p>Pseudo croissant</p>
        </button>
        <button
          className="border-none"
          type="button"
          onClick={() => {
            handleSortDescPseudo();
          }}
        >
          <p>Pseudo Décroissant</p>
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

FilterUsersAdmin.propTypes = {
  setSortOrder: PropTypes.func.isRequired,
};

export default FilterUsersAdmin;
