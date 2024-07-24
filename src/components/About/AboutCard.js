import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abderrazzak El Moutaki </span>
            based in <span className="purple">  Morocco </span>
            <br />
            with a degree in<span className="purple">  software development </span>. 
                        <br />
                        With <span className="purple">two   </span>year of freelance experience
            <br />
            <br />
            I've gained a strong background in<span className="purple">  software development </span>  and   <span className="purple">  programming  </span>       </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">El Moutaki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
