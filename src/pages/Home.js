import React from "react";
import Homedetails from "../components/homedetails";
import Homeimg from "../images/maison.jpg"
import Box from "../components/box";
const Home = () => {
  return (
    <>
    <img src={Homeimg} alt="paris" className="home_paris_img "/>
      <Homedetails
        title="GT IMMO 94"
        description=" GT IMMO94 met à votre service son professionnalisme, son savoir faire
               et son expérience pour une prise en charge complète et personnalisée
               de la gestion locative de vos biens immobiliers. Nos gestionnaires
               deviennent vos partenaires et vous libèrent des importantes charges
               administratives et juridiques liées à vos locations en vous
               garantissant des revenus locatifs optimisés. Vous souhaitez mettre en
               location un bien immobilier? Faites le choix de la sérénité et confiez
               nous votre gestion locative!"
      />
    <Box/>
      <Homedetails
        title="GTIMMO 94"
        description="  locative!"
      />
    </>
  );
};

export default Home;
