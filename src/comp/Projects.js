import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import projImg1 from "../assets/img/Pro1.jpg";
import projImg2 from "../assets/img/Pro2.jpg";
import projImg3 from "../assets/img/Pro3.jpg";
import projImg4 from "../assets/img/Pro4.jpg";
import ProjectCard from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Hospital Website (REACT)",
            description: "View project",
            imgUrl: projImg1,
            Lnk: "https://ma-bt.github.io/Hospital-website/",
        },
        {
            title: "Bar Website (REACT)",
            description: "View project",
           
            imgUrl: projImg2,
            Lnk: "https://ma-bt.github.io/Bar-website/",

        },
        
       
    ];
    const projects1 = [
        {
            title: "TODO APP (JS)",
            description: "View project",
            imgUrl: projImg3,
            Lnk: "https://ma-bt.github.io/todo-app/",
        },
        {
            title: "Water Tracker",
            description: "View project",
            imgUrl: projImg4,
            Lnk: "https://ma-bt.github.io/water-tracker/",
        },
        

    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}></div>}
                        </TrackVisibility>
                        <h2>Projects</h2>
                        <p>Here are the some of the Projects that i did using React and JavaScript and Feedback will be appreciated. </p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">JS Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project} />
                                                )
                                            })
                                        }
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second"><Row>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project} />
                                                )
                                            })
                                        }
                                    </Row></Tab.Pane>
                                <Tab.Pane eventKey="third">This null tab inspires me to do more projects</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section >

    )

}
export default Projects;