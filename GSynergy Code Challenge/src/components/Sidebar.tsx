import React from "react";
import { NavLink } from "react-router-dom";
import { FaStore, FaTags, FaTable, FaChartBar } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <NavLink to="/stores" className="nav-link">
          <FaStore className="icon" />
          <span>Stores</span>
        </NavLink>
        <NavLink to="/skus" className="nav-link">
          <FaTags className="icon" />
          <span>SKUs</span>
        </NavLink>
        <NavLink to="/planning" className="nav-link">
          <FaTable className="icon" />
          <span>Planning</span>
        </NavLink>
        <NavLink to="/chart" className="nav-link">
          <FaChartBar className="icon" />
          <span>Chart</span>
        </NavLink>
      </aside>
    </>
  );
}

export default Sidebar;
