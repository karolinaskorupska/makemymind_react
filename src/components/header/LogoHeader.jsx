import React from 'react';
import { Link } from "react-router-dom";

const LogoHeader = ({handleHamburgerMenu})=>{
    return(
        <div className="logo">
            <Link onClick={handleHamburgerMenu}  to="index" title="o nas" target="_self"><img src="assets/Header_logo_MMM.svg" alt="logo"></img></Link>
        </div>
    )
}

export default LogoHeader;