import React from "react";
import "./Navbar.css";
import logo from "../assets/gsynergy_logo.svg";




function Navbar() {

  const [authenticated, setAuthenticated] = React.useState(false);

  const handleAuthClick = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Company Logo" className="logo" />
          <span className="app-title">Data Viewer App</span>
        </div>
        <div className="navbar-right">
          <button onClick={handleAuthClick}>
            {authenticated ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;