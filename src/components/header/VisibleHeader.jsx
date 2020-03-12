import React from "react";
import Navigation from "./Navigation";

import HeaderButtons from "./HeaderButtons";
import LogoHeader from "./LogoHeader";

import HamburgerButton from "./HamburgerButton";
import { Container, Row, Col, Visible } from "react-grid-system";

const VisibleHeader = ({ handleHamburgerMenu }) => {
  return (
    <Container fluid>
      <Row justify="between">
        <header>
          <Visible xl lg md sm xs>
            <Col xl={2} lg={3} md={4} sm={5} xs={7}>
              <LogoHeader handleHamburgerMenu={handleHamburgerMenu} />
            </Col>
          </Visible>
          <Visible xl>
            <Col xl={6}>
              <Navigation handleHamburgerMenu={handleHamburgerMenu} />
            </Col>
          </Visible>
          <Visible md sm xs>
            <Col md={7} sm={5} xs={4}>
              {""}
            </Col>
          </Visible>

          <Visible xl lg>
            <Col xl={4} lg={7}>
              <HeaderButtons />
            </Col>
          </Visible>

          <Visible lg md sm xs>
            <Col lg={1} md={1} sm={1} xs={1}>
              <HamburgerButton handleHamburgerMenu={handleHamburgerMenu} />
            </Col>
          </Visible>
        </header>
      </Row>
    </Container>
  );
};

export default VisibleHeader;
