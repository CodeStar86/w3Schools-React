import React from "react";

export const Nav = () => {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="logo">
          <span class="material-symbols-outlined">rocket_launch</span>
        </div>
        <div className="nav-links">
          <div>
            <a href="#">Tutorials</a>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div>
            <a href="#">Exercises</a>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div>
            <a href="#">Certificates</a>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div>
            <a href="#">Services</a>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </div>
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <span class="material-symbols-outlined">search</span>
        </div>
        <div className="dark-light">
          <span class="material-symbols-outlined">contrast</span>
        </div>
      </div>
      <div className="rightside">
        <div className="services">
          <div>
            <a href="#">Jobs</a>
            <span class="material-symbols-outlined">work</span>
          </div>
          <div>
            <a href="#">Spaces</a>
            <span class="material-symbols-outlined">code</span>
          </div>
          <div>
            <a href="#" className="inlinetext">Get Certified</a>
            <span class="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
      </div>
      <div className="account">
        <button className="signup">Sign Up</button>
        <button className="login">Log In</button>
      </div>
    </div>
  );
};
