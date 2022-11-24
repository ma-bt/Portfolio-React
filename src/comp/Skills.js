import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import React from '../assets/img/react.png'
import HTMl from '../assets/img/html.png'
import Scss from '../assets/img/scss.png'
import Css from '../assets/img/css.png'
import Js from '../assets/img/JS.png'
import Tailwind from '../assets/img/tailwind.png'
import Bs from '../assets/img/Bs.png'
import Git from '../assets/img/git.png'
import PS from '../assets/img/ps.png'
import Fig from '../assets/img/fig.png'
import C from '../assets/img/c.png'
import Cplus from '../assets/img/cplus.png'
import Sql from '../assets/img/sql.png'






export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills - Language - Tools
                            </h2>
                            <p>I've been learning  front-end development from past several months and also looking forward to learn backend development.Here are some of the Language and tools I m familier with..
                            </p>

                            <div>
                                <h3 className="text-start">Technical Skills</h3>
                                <ul className="text-start">
                                    <li>Web development</li>
                                    <li>Ux/UI design</li>
                                    <li>Graphic Designing</li>
                                </ul></div>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={React} alt="Image" />
                                    <h5> React</h5>
                                </div>
                                <div className="item">
                                    <img src={HTMl} alt="Photo" />
                                    <h5> HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={Scss} alt="Photo" />
                                    <h5> SCSS</h5>
                                </div>
                                <div className="item">
                                    <img src={Css} alt="Photo" />
                                    <h5> CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={Js} alt="image" />
                                    <h5> Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={Bs} alt="image" />
                                    <h5> Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={Tailwind} alt="image" />
                                    <h5>Tailwind</h5>
                                </div>
                                <div className="item">
                                    <img src={Git} alt="image" />
                                    <h5> Git</h5>
                                </div>
                                <div className="item">
                                    <img src={C} alt="image" />
                                    <h5> C</h5>
                                </div>
                                <div className="item">
                                    <img src={Cplus} alt="image" />
                                    <h5> C++</h5>
                                </div>
                                <div className="item">
                                    <img src={Fig} alt="image" />
                                    <h5> Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={Sql} alt="image" />
                                    <h5> MySql</h5>
                                </div>
                                <div className="item">
                                    <img src={PS} alt="image" />
                                    <h5> Photoshop</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>


        </section>
    )
}
export default Skills;