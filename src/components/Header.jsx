import React from "react";

import { Component } from "react";

import VisibleHeader from "./header/VisibleHeader";

import VisibleHamburgerMenu from "./header/VisibleHamburgerMenu";


//
import {TweenMax} from 'gsap';



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
    

    return (
      <div >
        {!this.state.hamburgerIsOpen ? (
          <VisibleHeader
            handleHamburgerMenu={this.handleHamburgerMenu}
            handleHamburgerMenuClose={this.handleHamburgerMenuClose}
          />
        ) : (
          <VisibleHamburgerMenu
            handleHamburgerMenu={this.handleHamburgerMenu}
            handleHamburgerMenuClose={this.handleHamburgerMenuClose}
            hamburgerIsOpen={this.state.hamburgerIsOpen}
          />
        )}
      </div>
    );
  }
}

export default Header;
