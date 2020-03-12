import React from "react";

import { Component } from "react";

import VisibleHeader from "./header/VisibleHeader";

import VisibleHamburgerMenu from "./header/VisibleHamburgerMenu";

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
      <>
        {!this.state.hamburgerIsOpen ? (
          <VisibleHeader
            handleHamburgerMenu={this.handleHamburgerMenu}
            handleHamburgerMenuClose={this.handleHamburgerMenuClose}
          />
        ) : (
          <VisibleHamburgerMenu
            handleHamburgerMenu={this.handleHamburgerMenu}
            handleHamburgerMenuClose={this.handleHamburgerMenuClose}
          />
        )}
      </>
    );
  }
}

export default Header;
