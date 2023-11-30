import React from "react";
// import Slide from 'react-reveal/Slide';

const Homedetails = ({ title, description }) => {
  return (
    <>
      
      <section className="home__content home__content--secondary">
      {/* <Slide left > */}
        <h1 className="home__content--title">{title}</h1>
        <p className="home__content--us">{description}</p>
      {/* </Slide> */}
      </section>
    </>
  );
};

export default Homedetails;
