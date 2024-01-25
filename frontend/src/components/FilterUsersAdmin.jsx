import PropTypes from "prop-types";
import "./FilterUsersAdmin.scss";
import CrossButton from "../assets/picto/yellow/cross_yell.svg";

function FilterUsersAdmin({ sortOrder, setSortOrder, setToggleUserFilter }) {
  const handleSortAscPseudo = () => {
    setSortOrder("ascPseudo");
  };

  const handleSortDescPseudo = () => {
    setSortOrder("descPseudo");
  };

  const handleSortAscPoints = () => {
    setSortOrder("ascPoints");
  };

  const handleSortDescPoints = () => {
    setSortOrder("descPoints");
  };

  const handleSortAscRank = () => {
    setSortOrder("ascRank");
  };

  const handleSortDescRank = () => {
    setSortOrder("descRank");
  };

  const handleSortNull = () => {
    setSortOrder(null);
  };

  const handleClickFilter = () => {
    setToggleUserFilter(false);
  };

  return (
    <section className="fliter-users-section">
      <hr />
      <div className="cross-filter-div">
        <button
          className="cross-filter-button"
          type="button"
          onClick={() => {
            handleClickFilter();
          }}
        >
          <img src={CrossButton} alt="Fermeture du filtre" />
        </button>
      </div>
      <h2>Filtrer</h2>
      <div className="fliter-users-div">
        <button
          className={`border-none ${sortOrder === "ascPseudo" ? "active" : ""}`}
          type="button"
          onClick={() => {
            handleSortAscPseudo();
          }}
        >
          <p>Pseudo croissant</p>
        </button>
        <button
          className={`border-none ${
            sortOrder === "descPseudo" ? "active" : ""
          }`}
          type="button"
          onClick={() => {
            handleSortDescPseudo();
          }}
        >
          <p>Pseudo décroissant</p>
        </button>
        <button
          className={`border-none ${sortOrder === "ascPoints" ? "active" : ""}`}
          type="button"
          onClick={() => {
            handleSortAscPoints();
          }}
        >
          <p>Points croissant</p>
        </button>
        <button
          className={`border-none ${
            sortOrder === "descPoints" ? "active" : ""
          }`}
          type="button"
          onClick={() => {
            handleSortDescPoints();
          }}
        >
          <p>Points décroissant</p>
        </button>
        <button
          className={`border-none ${sortOrder === "ascRank" ? "active" : ""}`}
          type="button"
          onClick={() => {
            handleSortAscRank();
          }}
        >
          <p>Classements croissant</p>
        </button>
        <button
          className={`border-none ${sortOrder === "descRank" ? "active" : ""}`}
          type="button"
          onClick={() => {
            handleSortDescRank();
          }}
        >
          <p>Classements décroissant</p>
        </button>
        <button
          type="button"
          onClick={() => {
            handleSortNull();
          }}
        >
          <p>Annuler</p>
        </button>
      </div>
    </section>
  );
}

FilterUsersAdmin.propTypes = {
  sortOrder: PropTypes.oneOf([
    "ascPseudo",
    "descPseudo",
    "ascPoints",
    "descPoints",
    "ascRank",
    "descRank",
    null,
  ]).isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setToggleUserFilter: PropTypes.func.isRequired,
};

export default FilterUsersAdmin;
