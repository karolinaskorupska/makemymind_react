import React, {useRef, useEffect} from "react";
import { Container, Row, Col, ScreenClassRender } from "react-grid-system";
import Grow from '../images/Grow';
import gsap from 'gsap';

const Welcome = () => {

  let wrapper = useRef(null);

  useEffect(()=>{
    const [elements]= wrapper.current.children;

    const flower = elements.getElementById('flower');
    const stem = elements.getElementById('stem');
    const leavesElement = elements.getElementById('leaves');
    const leavesChildren = [...leavesElement.children];
    const bulb = elements.getElementById('bulb');
    const lady = elements.getElementById('lady');
    
    gsap.set([...leavesChildren, stem, bulb, lady], {autoAlpha:0});
    gsap.set(bulb, {transformOrigin:'50% 100%'});


    const tl = gsap.timeline({ defaults:{ease:'power3.inOut'}});

    tl.fromTo(lady, {x:'+=100'}, {duration:1.5, x: '-=100', autoAlpha:1})
      .fromTo(bulb, {opacity:0, scale:0.5}, {duration:0.8, autoAlpha:1, opacity:1, scale:1})
      .fromTo(stem, {autoAlpha:0, scale:0.4, transformOrigin:'50% 100%'},{duration:2, autoAlpha:1,scale:1})
      .to(leavesChildren, {duration:2, autoAlpha:1,scale:1, stagger:0.3});
     
      
  })
  return (
    <section className="welcome">
      <Container>
        <Row>
          <Col>
            <div className="txt">
              <div>
                <ScreenClassRender
                  render={screenClass => (
                    <h2
                      style={{
                        fontSize: ["md", "lg", "xl"].includes(screenClass)
                          ? "39px"
                          : "20px",
                        lineHeight: ["md", "lg", "xl"].includes(screenClass)
                          ? "45px"
                          : "25px",
                        textAlign: ["md","lg", "xl"].includes(screenClass)
                          ? "left"
                          : "center"
                      }}
                    >
                      Zadbaj o umysł, tak <br></br> jak dbasz o swoje ciało!
                    </h2>
                  )}
                />

                <ScreenClassRender
                  render={screenClass => (
                    <p
                      style={{
                        fontSize: ["md","lg", "xl"].includes(screenClass)
                          ? "14px"
                          : "12px"
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      A beatae, ullam optio dicta non eligendi pariatur?
                      Numquam, omnis explicabo magnam deserunt, quia quisquam
                      quos maxime reprehenderit aperiam ut odit officia!
                    </p>
                  )}
                />
                <button className="umow-sie">umów się za darmo!</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="img" ref={wrapper}>
              <Grow />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Welcome;




