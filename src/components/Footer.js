import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/trans.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="mt-5" style={{ maxWidth: '30%', height: 'auto' }}/>
          </Col>
          <Col size={12} sm={6} className="text-center mt-5 text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/laurentanudjaja/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/laurenchristyt"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/lauren.tanudjaja"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
