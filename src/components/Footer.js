import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/img/Logo(KT)1.png";
import navIcon1 from "../Assets/img/nav-icon1.svg";
import navIcon2 from "../Assets/img/git.svg";
import navIcon3 from "../Assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={20} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kalpit-thakur-9158a7242/">
                <img src={navIcon1} alt=""></img>
              </a>
              <a href="https://github.com/veer-kalpit">
                <img src={navIcon2} alt=""></img>
              </a>
              <a href="https://www.instagram.com/veer_kalpit/">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
