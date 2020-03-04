import React from "react";
import { Container, Row, Col, ScreenClassRender } from "react-grid-system";
import SmallBox1 from "../index/proces/SmallBox1";
import SmallBox2 from "../index/proces/SmallBox2";
import SmallBox3 from "../index/proces/SmallBox3";

const Proces = () => {
  return (
    <section className="proces">
      <Container>
        <Row>
          <Col>
            <ScreenClassRender
              render={screenClass => (
                <h2
                  style={{
                    fontSize: ["lg", "xl"].includes(screenClass)
                      ? "39px"
                      : "28px",
                    lineHeight: ["lg", "xl"].includes(screenClass)
                      ? "45px"
                      : "25px"
                  }}
                >
                  Proces
                </h2>
              )}
            />
          </Col>
        </Row>

        <div className="container-big">
          <Row>
            <Col>
              <SmallBox1 />
            </Col>
            <Col>
              <SmallBox2 />
            </Col>
            <Col>
              <SmallBox3 />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Proces;
