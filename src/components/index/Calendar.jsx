import React from "react";
import {
  Container,
  Row,
  Col,
  ScreenClassRender
} from "react-grid-system";
const Calendar = () => {
  return (
    <section className="calendar">
      <Container>
        <Row >
          <Col >
            <div className="img-calendar">
              <img
                src="assets/illustration_calendar.svg"
                alt="calendar illustration"
              ></img>
            </div>
          </Col>
          <Col >
            <ScreenClassRender
              render={screenClass => (
                <div
                  className="txt"
                  style={{
                    textAlign: ["lg", "xl"].includes(screenClass)
                      ? "left"
                      : "center",
                    paddingTop: ["lg", "xl"].includes(screenClass)
                      ? "3rem"
                      : "1rem",
                    marginTop: ["lg", "xl"].includes(screenClass)
                      ? "9rem"
                      : "2rem"
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
                        Zacznij już dziś!
                      </h2>
                    )}
                  />

                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    beatae, ullam optio dicta non eligendi pariatur? Numquam,
                    omnis explicabo magnam deserunt, quia quisquam quos maxime
                    reprehenderit aperiam ut odit officia!
                  </p>
                  <button className="umow-sie">
                    umów się na darmowe badanie
                  </button>
                  <a href="dowiedz.sie.wiecej">Dowiedz się więcej</a>
                </div>
              )}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Calendar;
