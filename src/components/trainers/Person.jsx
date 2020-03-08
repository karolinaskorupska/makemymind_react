import React from "react";
import { Component } from "react";
import { ScreenClassRender, Hidden } from "react-grid-system";

class Person extends Component {
  state = {
    clicked: false
  };
  showMore = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    const {
      name,
      surname,
      photoPath,
      description,
      shortDescription
    } = this.props.trainer;

    return (
      <ScreenClassRender
        render={screenClass => (
          <div
            className="person"
            style={{
              marginBottom: ["md", "lg", "xl"].includes(screenClass)
                ? "1rem"
                : "3rem"
            }}
          >
            <div className="introduce">
              <div className="image">
                <img src={photoPath} alt="trainer photo"></img>
              </div>
              <ScreenClassRender
                render={screenClass => (
                  <div
                    className="name"
                    style={{
                      fontSize: ["md","lg", "xl"].includes(screenClass)
                        ? "39px"
                        : "20px",
                      lineHeight: ["md","lg", "xl"].includes(screenClass)
                        ? "45px"
                        : "25px",
                      width: ["md","lg", "xl"].includes(screenClass)
                        ? "25rem"
                        : "12rem",
                      marginLeft: ["md","lg", "xl"].includes(screenClass)
                        ? "3%"
                        : "-3%",
                      padding: ["sm","md","lg", "xl"].includes(screenClass)
                        ? "1rem"
                        : "0.3rem"
                    }}
                  >
                    {name} {""}
                    <Hidden sm md lg xl>
                      <br></br>
                    </Hidden>
                    {surname}
                  </div>
                )}
              />
            </div>
            <div className="description">
              <p>{shortDescription}</p>
              {description.map((p, index) => (
                <p id={!this.state.clicked ? "hiddenIn320px" : ""} key={index}>
                  {p}
                </p>
              ))}
              <button className="rozwin zwin" onClick={this.showMore}>
                {!this.state.clicked ? "rozwiń" : "zwiń"}
              </button>
            </div>
          </div>
        )}
      />
    );
  }
}

export default Person;
