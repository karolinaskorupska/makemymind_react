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
                    fontSize: ["md", "lg", "xl"].includes(screenClass)
                      ? "39px"
                      : "20px",
                    lineHeight: ["md", "lg", "xl"].includes(screenClass)
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

        <Row>
          <Col>
            <div className="container-big">
              <SmallBox1 />

              <SmallBox2 />

              <SmallBox3 />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Proces;
