import React from "react";
import {
  Container,
  Row,
  Col,
  ScreenClassRender
} from "react-grid-system";
import Training from "../components/trainings/Training";

const Trainings = () => {
  return (
    <main>
        <Container>
      <div className="container trainings">
        
          <Row>
            <Col>
              <ScreenClassRender
                render={screenClass => (
                  <h2
                    style={{
                      fontSize: ["lg", "xl"].includes(screenClass)
                        ? "39px"
                        : "20px",
                      lineHeight: ["lg", "xl"].includes(screenClass)
                        ? "45px"
                        : "25px"
                    }}
                  >
                    Treningi z kompetencji miękkich
                  </h2>
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="big-box trainings">
                <Training />
              </div>
            </Col>
          </Row>
       
      </div>
      </Container>
    </main>
  );
};

export default Trainings;
