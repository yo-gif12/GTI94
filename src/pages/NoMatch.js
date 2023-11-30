import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";

const NoMatch = () => {
  return (
    <>
    <div className="nomatch_container">
    <p>404 <br/> Page non trouvée !</p>
<Link to={"/"}>Retour à l'acceuil </Link>
    </div>
    </>
  );
};

export default NoMatch;
