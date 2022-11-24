import { React, } from "react";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons"
import curlLogo from "../assets/img/curllogo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <Col xs={12} md={6} xl={7}  >
            <TrackVisibility>
            {({isVisible }) => 
              <div >
                <img src={curlLogo} alt="Logo" style={{height:'350px', width:'400px'}} className='d-none  d-lg-inline justify-content-center'/>
                
                <h1>
                  {`Hey !`} <br/> 
                </h1>
                <h5>
                 <b> This is <b  className="hello">Mandira Basnet</b></b> </h5> 
                 <h5>Computer Science student  and passionate learner. 
                </h5>
                <p className="pt-2">Please scroll down to know more about me and check out some of my awesome projects.<br/> Have a great time srolling here.</p>
             
            
          <button onClick={() => console.log("connect")} className='align-item-center'>Scroll down< ArrowRightCircle size={25} /></button>
          </div>}
          </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
