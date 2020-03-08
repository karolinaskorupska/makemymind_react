import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ScreenClassRender,
  Hidden
} from "react-grid-system";
//fontawesome:
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSpinner,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faSpinner, faChevronRight, faChevronLeft);


class Opinie extends Component {
  state = {
    activeSlide: 0,
    opinionsList: []
  };
  componentDidMount() {
    fetch("http://localhost:4000/opinions")
      .then(response => {
        return response.json();
      })
      .then(opinion => {
        this.setState({
          opinionsList: opinion
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  setPrevSlide = () => {
    const { opinionsList } = this.state;
    this.setState(state => {
      const activeSlide = state.activeSlide - 1;
      return {
        activeSlide: activeSlide < 0 ? opinionsList.length - 1 : activeSlide
      };
    });
  };

  setNextSlide = () => {
    const { opinionsList } = this.state;
    this.setState(state => {
      const activeSlide = state.activeSlide + 1;
      return {
        activeSlide: activeSlide > opinionsList.length - 1 ? 0 : activeSlide
      };
    });
  };

  render() {
    const { opinionsList } = this.state;
    return (
      <section className="opinie">
        <Container>
          <div className="container">
            <Row>
              <Col>
                <ScreenClassRender
                  render={screenClass => (
                    <h2
                      style={{
                        fontSize: ["md","lg", "xl"].includes(screenClass)
                          ? "39px"
                          : "20px",
                        lineHeight: ["md","lg", "xl"].includes(screenClass)
                          ? "45px"
                          : "25px"
                      }}
                    >
                      Opinie
                    </h2>
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="carousel" id="carousel">
                  <div className="carousel-container-big">
                    <div className="carousel-container">
                      <div onClick={() => this.setPrevSlide()}>
                        <ScreenClassRender
                          render={screenClass => (
                            <FontAwesomeIcon
                              icon={["fas", "chevron-left"]}
                              className="fas fa-chevron-left"
                              fixedWidth
                              style={{
                                position: ["xs"].includes(screenClass)
                                  ? "absolute"
                                  : "relative",
                                bottom: ["xs"].includes(screenClass) && "2rem",
                                right: ["xs"].includes(screenClass) && "60%",
                                color: "#9B9B9B",
                                fontSize: "28px",
                                cursor: "pointer"
                              }}
                            />
                          )}
                        />
                      </div>
                      {opinionsList.map(opinion => {
                        return (
                          <div
                            key={opinion.author}
                            className={`small-container ${
                              this.state.activeSlide ===
                              opinionsList.indexOf(opinion)
                                ? "visible"
                                : ""
                            }`}
                          >
                            <Hidden xs sm>
                              <img
                                className="opinieImg"
                                src={opinion.photoPath}
                                alt="obrazek opinii"
                                style={{ width: "193px", height: "143px" }}
                              ></img>
                            </Hidden>

                            <div className="carousel-txt-container">
                              <ScreenClassRender
                                render={screenClass => (
                                  <h4
                                    style={{
                                      lineHeight: ["lg", "xl"].includes(
                                        screenClass
                                      )
                                        ? "40px"
                                        : "30px",
                                        textAlign: ["lg", "xl"].includes(
                                            screenClass
                                          )
                                            ? "left"
                                            : "center"
                                    }}
                                  >
                                    {opinion.title}
                                  </h4>
                                )}
                              />
                              <p>{opinion.opinionText}</p>
                              <p className="person">
                                <span>{opinion.author}</span> |{" "}
                                {opinion.position}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      <div onClick={() => this.setNextSlide()}>
                        <ScreenClassRender
                          render={screenClass => (
                            <FontAwesomeIcon
                              icon={["fas", "chevron-right"]}
                              className="fas fa-chevron-right"
                              fixedWidth
                              style={{
                                position: ["xs"].includes(screenClass)
                                  ? "absolute"
                                  : "relative",
                                bottom: ["xs"].includes(screenClass) && "2rem",
                                right: ["xs"].includes(screenClass) && "40%",
                                color: "#9B9B9B",
                                fontSize: "28px",
                                cursor: "pointer"
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default Opinie;
