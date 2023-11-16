import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../App.css'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="./img/header3.png" className="hero-image" alt="" />
        <div className="inner-hero-container">
          <h1 className="hero-title">
            <span>T's Foodery</span>
          </h1>
          <p className="hero-content-paragraph">
            What would you do if you had a thousand recipies at your disposal?
          </p>
        </div>
        <div className="hero-button-container">
          <button className="hero-button">Learn More</button>
          <button className="hero-button">Foodery Community</button>
        </div>
      </div>

      <div className="container">
        <div className="inner-container">
          <div className="element-items">
            <img
              src="./img/grilled-prawn.png"
              className="element-image"
              alt=""
            />
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisins curated and tens of recipes created each day, start
              cooking and experiece what you can do with your kitchen today.
            </p>
          </div>
          <div className="element-items">
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisins curated and tens of recipes created each day, start
              cooking and experiece what you can do with your kitchen today.
            </p>
            <img src="./img/hamburger.png" className="element-image" alt="" />
          </div>
          <div className="element-items">
            <img src="./img/pasta.png" className="element-image" alt="" />
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisins curated and tens of recipes created each day, start
              cooking and experiece what you can do with your kitchen today.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default IndexPage;
