import React from "react";
// import Slide from "react-reveal/Slide";

const Box = () => {
  return (
    <>
      {/* <Slide left> */}
        <section className="box__content box__content--secondary">
          <h1 className="box__content--title">Nos Avantages</h1>
          <div className="box__content--items">
            {/* <Slide right> */}
              <div className="box__content--item">
                <h2>Professionnalisme</h2>
                <p>
                  Notre expertise et notre expérience facilitera vos démarches
                  administratives et juridiques
                </p>
              </div>
            {/* </Slide> */}
            {/* <Slide left> */}
              <div className="box__content--item">
                <h2>Accompagnement</h2>
                <p>
                  Votre gestionnaire s’occupe de tout et vous informe de tout à
                  chaque étape
                </p>
              </div>
            {/* </Slide> */}
            {/* <Slide right> */}
              <div className="box__content--item">
                <h2>Disponibilité</h2>
                <p>
                  A votre écoute pour répondre à toute question et vous aider à
                  prendre les bonnes décisions
                </p>
              </div>
            {/* </Slide> */}
            {/* <Slide left> */}
              <div className="box__content--item">
                <h2>Sécurité</h2>
                <p>
                  Une sélection des candidats locataires et des assurances pour
                  garantir vos loyers
                </p>
              </div>
            {/* </Slide> */}
          </div>
        </section>
      {/* </Slide> */}
    </>
  );
};

export default Box;
