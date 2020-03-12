import React from 'react';

const CrossButton =({handleHamburgerMenu})=>{
    return(
        <button className="cross visible" onClick={handleHamburgerMenu}>
            <span></span>
            <span></span>
          </button>
    )
};

export default CrossButton;