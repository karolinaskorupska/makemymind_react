import React from "react";
import { Link } from "react-router-dom";
const HamburgerMenuIcons = () => {
  return (
    <div className="hamburger-menu-icons">
      <Link to="https://www.linkedin.com/company/make-my-mind/" target="_blank">
        <img src="assets/Linked_Icon_dark.svg" alt="LinkedIn"></img>
      </Link>
      <Link to="https://www.facebook.com/makemymindpl/" target="_blank">
        <img src="assets/Facebook_Icon_dark.svg" alt="Facebook"></img>
      </Link>
      <Link to="#">
        <img
          src="assets/Twitter_Icon_dark.svg"
          alt="Twitter"
          target="_blank"
        ></img>
      </Link>
      <Link to="https://www.instagram.com/make_my_mind/" target="_blank">
        <img src="assets/Instagram_Icon_dark.svg" alt="Instagram"></img>
      </Link>
    </div>
  );
};

export default HamburgerMenuIcons;
