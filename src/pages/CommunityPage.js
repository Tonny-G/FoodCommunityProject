import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CommunityPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div style={{ marginTop: "100px" }} className="inner-container">
          <div className="community-header">
            <img
              src="img/foodCommunity.jpg"
              alt=""
              className="community-image"
            />
            <div className="community-header-right">
              <h3 className="community-header-title">Join the Community</h3>
              <form
                action="https://getform.io/f/a26cbb24-3174-4e81-996e-72a4c9f27b96"
                method="POST"
                className="form"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <button type="submit">Join!</button>
              </form>
            </div>
          </div>
          <div className="community-content">
            <h3>What is the Community?</h3>
            <p>
              The Foodary Community help to contribute dishes and recipes that
              are curated by our team of chefs. We will modify the recipe and
              publish them to Foodary!
            </p>
          </div>
          <div className="community-content">
            <h3>How do i join?</h3>
            <p>
              Simply enter your email address and we will send you a link to
              join the community!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
