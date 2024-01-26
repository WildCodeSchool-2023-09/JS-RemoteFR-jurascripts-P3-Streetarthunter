/* eslint-disable react/forbid-prop-types */
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
// import NavBar from "../MainNavBars/NavBar";

import "./Layout.scss";

function UserLayout({ isPlayerMode, isAdminMode }) {
  return <Outlet isPlayerMode={isPlayerMode} isAdminMode={isAdminMode} />;
}

UserLayout.propTypes = {
  isPlayerMode: PropTypes.bool.isRequired,
  isAdminMode: PropTypes.bool.isRequired,
};

export default UserLayout;
