import React from "react";
import Image from "./about-bg.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

const Header = () => {
  return (
    <header className="masthead" style={styles.paperContainer}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>My Blog</h1>
              <span className="subheading">
                A Blog By ReactJs and Bootstrap
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
