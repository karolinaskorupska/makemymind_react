import React, { Component, useRef, useEffect} from "react";

import LogoHeader from "./LogoHeader";
import { Container, Row, Col, Visible } from "react-grid-system";
import CrossButton from "./CrossButton";
import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";
import HamburgerMenuIcons from "./HamburgerMenuIcons";


import gsap from 'gsap';


const VisibleHamburgerMenu = ({
  handleHamburgerMenu,
  handleHamburgerMenuClose, 
  hamburgerIsOpen
}) => {

  let wrapper = useRef(null);

  useEffect(()=>{
    const hamburgerNav = wrapper.current;
    console.log(hamburgerNav);

    // const {hamburgerIsOpen} = hamburgerIsOpen;
    console.log(hamburgerIsOpen)

    gsap.set(hamburgerNav, {autoAlpha:0});

    const tl = gsap.timeline({defaults:{ease:'power3.inOut'}});

    tl.fromTo(hamburgerNav, {y:"-=100"}, {duration:1, y:"+=100", autoAlpha:1})
 
    
  })

  return (
    
    <Container fluid >
      <Visible lg md sm xs>
        <Row justify="between">
          <header >
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
          <div className="hamburger-nav" id="hamburger-nav" ref={wrapper}>
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
