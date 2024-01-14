import React from "react";
import logo from "../images/LOGO_PAS_COMPLET.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav_content">
          <Link to="/">
            <img src={logo} className="img_logo" alt="Logo" />
          </Link>

          <Link to="/">Accueil</Link>
          <Link to="/rent">Nos Locations</Link>
          <Link to="/gestion">Gestion locative</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
