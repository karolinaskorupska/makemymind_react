import React from "react";

const CrossButton = ({ handleHamburgerMenu }) => {
  return (
    <button className="cross visible" onClick={handleHamburgerMenu}>
      <div className="cross">
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default CrossButton;
