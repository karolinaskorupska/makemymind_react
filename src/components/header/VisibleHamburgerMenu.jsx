import React from "react";

import LogoHeader from "./LogoHeader";
import { Container, Row, Col, Visible } from "react-grid-system";
import CrossButton from "./CrossButton";
import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";
import HamburgerMenuIcons from "./HamburgerMenuIcons";

const VisibleHamburgerMenu = ({
  handleHamburgerMenu,
  handleHamburgerMenuClose
}) => {
  return (
    <Container fluid>
      <Visible lg md sm xs>
        <Row justify="around">
          <header>
            <Col xl={2} lg={3} md={4} sm={5} xs={7}>
              <LogoHeader handleHamburgerMenu={handleHamburgerMenu} />
            </Col>
            <Col lg={7} md={6} sm={5} xs={2}>
              {""}
            </Col>
            <Col lg={1} md={1} sm={1} xs={1}>
              <CrossButton handleHamburgerMenu={handleHamburgerMenuClose} />
            </Col>
          </header>
        </Row>
        <Row>
          <div className="hamburger-nav">
            <div className="inside-box">
            <Col>
              <Navigation handleHamburgerMenu={handleHamburgerMenu} />
              <HeaderButtons />
              <HamburgerMenuIcons />
            </Col>
            </div>
          </div>
        </Row>
      </Visible>
    </Container>
  );
};

export default VisibleHamburgerMenu;
