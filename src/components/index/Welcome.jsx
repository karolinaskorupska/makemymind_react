import React from "react";
import { Container, Row, Col, ScreenClassRender } from "react-grid-system";

const Welcome = () => {
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
            <div className="img">
              <img
                className="grow"
                src="assets/illustration_grow.svg"
                alt="grow!"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Welcome;




