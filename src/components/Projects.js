import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/iot.jpg";
import projImg2 from "../assets/img/project-img2.png";
import lexia from "../assets/img/Lexia.png";
import projImg3 from "../assets/img/project-img3.png";
import fsm from "../assets/img/FSM.jpg";
import air from "../assets/img/Air.jpg";
import stellion from "../assets/img/Stellion.JPG";
import cigritous from "../assets/img/Cigritous.jpg";
import nishastra from "../assets/img/Nishastra.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Smart Health Monitoring System" ,
      description: "IoT based Real-time Heart Rate and Body Temperature Tracking",
      imgUrl: projImg1,
      githubUrl: "https://github.com/laurenchristyt/Smart-Health-Monitoring-System-for-Real-time-Heart-Rate-and-Body-Temperature-Tracking",
      demoUrl: "https://youtu.be/8hMWEtPh2N8"
    },
    {
      title: "Lexia",
      description: "Website-based game for dyslexia people",
      imgUrl: lexia,
      githubUrl: "https://github.com/laurenchristyt/Lexia",
      demoUrl: "#"
    },
    {
      title: "Air Quality Monitor",
      description: "Design & Development",
      imgUrl: air,
      githubUrl: "https://github.com/laurenchristyt/Air-Quality-Monitor",
      demoUrl: "#"
    },
  ];

  const projects2 = [
    {
      title: "Cigritous: Crop Monitoring with Automated UAV Spray Response",
      description: "Achieved Runner Up of NXP HoverGames3: Land, Sky, Food Supply",
      imgUrl: cigritous,
      githubUrl: "https://www.hackster.io/vishwakarma/cigritous-crop-monitoring-with-automated-uav-spray-response-473d80",
      demoUrl: "https://www.youtube.com/watch?v=OsC5pi7hQas"
    },
    {
      title: "Nishastra: Racing Quadcopter for IEEE Chase Challenge",
      description: "",
      imgUrl: nishastra,
      githubUrl: "https://github.com/rotary-auav-ui/ieee-chase-challenge",
      demoUrl: "#"
    },
    {
      title: "Stellion: Weight-lifting quadcopter implementing website-based Ground Control System",
      description: "Achieved Finalist in Kontes Robot Terbang Indonesia 2023",
      imgUrl: stellion,
      githubUrl: "https://github.com/rotary-auav-ui/vishwakarma-krti2023",
      demoUrl: "#"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the Projects section of my portfolio, where you can explore a collection of my deployable work that showcases my skills. Each project here represents a field I've overcome. Whether it's web development, app development, drone developing, IoT, or any other field, I poured my dedication into every project to deliver these. Hover on every image to see the details!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">STEM Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Drone Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    <p>Series of quadcopter projects developed while participating as part of the Vishwakarma team in Tim Robotika Universitas Indonesia (TRUI).</p>
                    </Row>
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
