import React from "react";
import Homedetails from "../components/homedetails";
import Homeimg from "../images/imageAcc.jpg";
import Box from "../components/box";
const Home = () => {
  return (
    <>
      <img src={Homeimg} alt="paris" className="home_paris_img " />
      <Homedetails
        title="GT IMMO 94"
        description=" GT IMMO 94 met à votre service son professionnalisme pour un accompagnement complet et personnalisé de vos transactions ou de la gestion locative de votre bien immobilier. Nous serons  votre partenaire privilégié pour  toutes vos démarches administratives et juridiques .Sérieux et dynamiques,  nous vous proposons un service qui garantira des revenus locatifs optimisés et des  transactions réussies. Vous souhaitez  louer, acheter, vendre  ou faire gérer votre bien immobilier ? Choisissez la sérénité en nous confiant cette mission!"
      />
      <Box />
      <Homedetails title="GTIMMO 94" description="  locative!" />
    </>
  );
};

export default Home;
