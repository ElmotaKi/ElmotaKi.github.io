import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import lab1 from "../../Assets/Projects/lap1.png"
import lab2 from "../../Assets/Projects/lap2.png"
import lab3 from "../../Assets/Projects/lap3.png"




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lab1}
              isBlog={false}
              title="Everything"
              description="I developed a comprehensive web platform for SPS Technologie using React for the front-end and Laravel for the back-end. The platform facilitated production management, order tracking, transaction handling, invoicing, quoting, stock management, and payments. It streamlined operations, reduced manual work, and provided real-time insights, significantly improving efficiency across the board."
              ghLink="https://github.com/ElmotaKi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lab3}
              isBlog={false}
              title="BCarLo"
              description="Developed a React and Laravel-based rental management system for BCarLo, tailored for overseeing multiple rental offices efficiently."
              ghLink="https://github.com/ElmotaKi/Front_gestion_autoMobile"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lab2}
              isBlog={false}
              title="Student Orientation System"
              description="Developed a deep learning-based system using Python for both front-end and back-end, utilizing CNN and MLP models to assist students in orientation decisions."
              ghLink="https://github.com/ElmotaKi/Student-Orientation-System"
            />
          </Col>

 

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
