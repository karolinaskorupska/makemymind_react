import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Navigation from "./header/Navigation";
import HamburgerMenuIcons from "./header/HamburgerMenuIcons";
import HeaderButtons from "./header/HeaderButtons";

class Header extends Component {
  state = {
    hamburgerIsOpen: false
  };


  handleHamburgerMenu = () => {
    this.setState({
      hamburgerIsOpen: !this.state.hamburgerIsOpen
    });
  };

  handleHamburgerMenuClose = () => {
    this.setState({
      hamburgerIsOpen: false
    });
  };

  render() {
    const { hamburgerIsOpen } = this.state;

    return (
      <header className={hamburgerIsOpen ? "hamburger-menu-on" : ""}>
        <div className="logo">
        <Link onClick={this.handleHamburgerMenu} exact to="index" title="o nas" target="_self"><img src="assets/Header_logo_MMM.svg" alt="logo"></img></Link>
          <button className="cross visible" onClick={this.handleHamburgerMenu}>
            <span></span>
            <span></span>
          </button>
        </div>

        <Navigation handleHamburgerMenu={this.handleHamburgerMenuClose} />
        <div className="sidenav">
          <HeaderButtons />
          <HamburgerMenuIcons />
        </div>

        <button onClick={this.handleHamburgerMenu} className="hamburger">
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>
      </header>
    );
  }
}

export default Header;
