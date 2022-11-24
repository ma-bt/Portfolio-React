import { Container, Row, Col } from "react-bootstrap"
import curlLogo from "../assets/img/curllogo.png";

export const Footer = () => {
    return (
        <footer className="footer ">
            <Container >
                <Row className="align-items-center">

                    <Col sm={6}>
                        <img src={curlLogo} alt='logo' />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon-1">
                            <button type="button" className="btn btn-light "> <a href="https://docs.google.com/document/d/10-B0pGBHSGPvZbV5XUBZ83L9HbiG7K8oeFQeQ0TYXNk/edit?usp=sharing" className="text-decoration-none tezt-reset">Resume</a></button>

                          
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}
export default Footer;