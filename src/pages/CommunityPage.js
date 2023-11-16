import React from "react";
import Header from "../components/Header";

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
              <div className="form">
                <input type="email" placeholder="Enter your Email" />
                <button>Join!</button>
              </div>
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
    </div>
  );
};

export default CommunityPage;
