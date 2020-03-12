import React from "react";
import Article from "../components/trainers/Article";
import { Container, Row, Col, ScreenClassRender } from "react-grid-system";

const Trainers = () => {
  return (
    <main>
      <div className="trainers container">
        <Container>
          <Row>
            <ScreenClassRender
              render={screenClass => (
                <Col
                  
                  style={{
                    marginTop: ["lg", "xl"].includes(screenClass)
                      ? "7rem"
                      : "2rem"
                  }}
                >
                  <Article />
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
                           marginBottom: ["md","lg", "xl"].includes(screenClass)
                            ? "4rem"
                            : "2rem"
                        }}
                      >
                        Więcej sylwetek trenerów już wkrótce!
                      </h2>
                    )}
                  />
                </Col>
              )}
            />
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Trainers;
