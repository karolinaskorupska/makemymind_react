import React from "react";

const HamburgerButton = ({ handleHamburgerMenu }) => {
  return (
    <button onClick={handleHamburgerMenu} className="hamburger">
      <div className="hamburger">
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </div>
    </button>
  );
};

export default HamburgerButton;
