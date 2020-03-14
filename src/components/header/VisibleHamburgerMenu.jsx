import React, { Component, useRef, useEffect} from "react";

import LogoHeader from "./LogoHeader";
import { Container, Row, Col, Visible } from "react-grid-system";
import CrossButton from "./CrossButton";
import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";
import HamburgerMenuIcons from "./HamburgerMenuIcons";


import {TweenMax} from 'gsap';


const VisibleHamburgerMenu = ({
  handleHamburgerMenu,
  handleHamburgerMenuClose
}) => {

  let app = useRef(null);

  useEffect(()=>{
    TweenMax.to(app, 0, {visibility:'visible'});
    console.log(app)
  })

  return (
    <Container fluid >
      <Visible lg md sm xs>
        <Row justify="between">
          <header ref={el =>app =el}>
            <Col xl={2} lg={3} md={4} sm={5} xs={7}>
              <LogoHeader handleHamburgerMenu={handleHamburgerMenu} />
            </Col>
            <Col lg={7} md={7} sm={5} xs={4}>
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
