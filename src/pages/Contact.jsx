import React from "react";
import { Container, Row, Col, ScreenClassRender } from "react-grid-system";
import Form from "../components/contact/Form";

const Contact = () => {
  return (
    <main className="contact">
      <div className="container contact">
        <Container fluid>
          <Row justify="center">
            <Col >
              <div className="txt-box">
                <ScreenClassRender
                  render={screenClass => (
                    <div
                      className="txt"
                      style={{
                        alignItems: ["md", "lg", "xl"].includes(screenClass)
                          ? "flex-start"
                          : "center",
                        width: ["lg", "xl"].includes(screenClass)
                          ? "37rem"
                          : "18rem",
                        marginRight: ["lg", "xl"].includes(screenClass)
                          ? "3rem"
                          : "0"
                      }}
                    >
                      <ScreenClassRender
                        render={screenClass => (
                          <h2
                            style={{
                              fontSize: ["lg", "xl"].includes(screenClass)
                                ? "39px"
                                : "20px",
                              lineHeight: ["lg", "xl"].includes(screenClass)
                                ? "45px"
                                : "25px",
                              textAlign: ["lg", "xl"].includes(screenClass)
                                ? "left"
                                : "center"
                            }}
                          >
                            Napisz do nas
                          </h2>
                        )}
                      />
                      <Form />
                    </div>
                  )}
                />
              </div>
            </Col>

            <Col >
              <div className="img">
                <ScreenClassRender
                  render={screenClass => (
                    <img
                      className="grow"
                      src="assets/illustration_grow.svg"
                      alt="grow!"
                      style={{
                        height: ["lg", "xl"].includes(screenClass)
                          ? "70%"
                          : "15rem"
                      }}
                    ></img>
                  )}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Contact;
