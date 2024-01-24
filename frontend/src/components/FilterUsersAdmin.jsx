import { useState } from "react";
import PropTypes from "prop-types";
import "./FilterUsersAdmin.scss";

function FilterUsersAdmin({ users }) {
  const [sortOrder, setSortOrder] = useState(null);
  console.info(sortOrder);

  const sortUsersPseudo = [...users].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.pseudo - b.pseudo;
    }
    if (sortOrder === "desc") {
      return b.pseudo - a.pseudo;
    }
    return null;
  });
  console.info(sortUsersPseudo);

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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      pseudo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FilterUsersAdmin;
