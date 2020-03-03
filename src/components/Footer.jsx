import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import FooterLeft from "./footer/FooterLeft";
import FooterMiddle from "./footer/FooterMiddle";
import FooterRight from "./footer/FooterRight";

const Footer = () => {
  return (
    <Container fluid>
      <footer>
        <div className="footer">
          <Row>
            <Col>
              <FooterLeft />
            </Col>
            <Col>
              <FooterMiddle />
            </Col>

            <Col>
              <FooterRight />
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
            <div className="copyrights">Copyrights @ Make my mind 2019</div>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export default Footer;
