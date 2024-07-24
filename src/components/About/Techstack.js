import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSpring,
  SiPostgresql,
  SiOracle,
} from "react-icons/si";
import { FaBootstrap, FaLaravel, FaPhp , } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

import { TbBrandGolang, TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaPhp /> 
           </Col>
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GiArtificialIntelligence />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
