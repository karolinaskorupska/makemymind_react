import React from "react";

import { Component } from "react";
import { Container, Row, Col, Hidden, Visible } from "react-grid-system";
import Navigation from "./header/Navigation";
import HeaderButtons from "./header/HeaderButtons";
import HamburgerMenuIcons from "./header/HamburgerMenuIcons";
class Header extends Component {
  state = {
    hamburgerIsOpen: false
  };
  handleHamburgerMenu = () => {
    this.setState({
      hamburgerIsOpen: !this.state.hamburgerIsOpen
    });
  };
  render() {
    const { hamburgerIsOpen } = this.state;
    return (
      <Container fluid>
        <Row>
          <header className={hamburgerIsOpen ? "hamburger-menu-on" : ""}>
            <Col xs={12} style={{ flex: 0 }}>
              <div className="logo">
                <img src="./assets/Header_logo_MMM.svg" alt="logo"></img>
                <button
                  className="cross visible"
                  onClick={this.handleHamburgerMenu}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </Col>
            <Row>{hamburgerIsOpen ? <Navigation /> : false}</Row>
            <Row>
              <div className="sidenav">
                <Visible lg xl>
                  <HeaderButtons />
                </Visible>
                <Hidden xl>
                  <HamburgerMenuIcons />
                </Hidden>
                <Visible xs sm md lg>
                  <button
                    onClick={this.handleHamburgerMenu}
                    style={{ display: hamburgerIsOpen ? "none" : "block" }}
                    className="hamburger"
                  >
                    <span className="hamburger__box">
                      <span className="hamburger__inner"></span>
                    </span>
                  </button>
                </Visible>
              </div>
            </Row>
          </header>
        </Row>
      </Container>
    );
  }
}
export default Header;
