import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Component } from "react";
import { Container, Row, Col, Hidden, Visible } from "react-grid-system";


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
            <Col xl={3} lg={4} md={6} sm={4} xs={6}>
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
            <Col xl={5} lg={0} md={0} sm={0} xs={0} >
              <nav style={{ display: hamburgerIsOpen ? "block" : "none" }}>
              
                <ul>
                  <li>
                    <NavLink exact to="index" title="o nas" target="_self">
                      o nas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="http" title="o projekcie" target="_self">
                      o projekcie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="trainings" title="uslugi" target="_self">
                      usługi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="trainers"
                      title="trenerzy"
                      target="_self"
                    >
                      trenerzy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="contact" title="kontakt" target="_self">
                      kontakt
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col xl={4} lg={8} md={6} sm={8} xs={6} >
              <div className="sidenav">
                <Visible lg xl>
                  <button className="sprawdz-trening">sprawdz trening!</button>
                  <button className="umow-sie">umów się za darmo</button>
                </Visible>
                <Hidden xl>
                  <div className="hamburger-menu-icons">
                    <Link
                      to="https://www.linkedin.com/company/make-my-mind/"
                      target="_blank"
                    >
                      <img
                        src="assets/Linked_Icon_dark.svg"
                        alt="LinkedIn"
                      ></img>
                    </Link>
                    <Link
                      to="https://www.facebook.com/makemymindpl/"
                      target="_blank"
                    >
                      <img
                        src="assets/Facebook_Icon_dark.svg"
                        alt="Facebook"
                      ></img>
                    </Link>
                    <Link to="#">
                      <img
                        src="assets/Twitter_Icon_dark.svg"
                        alt="Twitter"
                        target="_blank"
                      ></img>
                    </Link>
                    <Link
                      to="https://www.instagram.com/make_my_mind/"
                      target="_blank"
                    >
                      <img
                        src="assets/Instagram_Icon_dark.svg"
                        alt="Instagram"
                      ></img>
                    </Link>
                  </div>
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
            </Col>
          </header>
        </Row>
      </Container>
    );
  }
}

export default Header;
