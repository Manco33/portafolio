import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Bienvenido a mi <span className="purple"> portafolio </span> 
            </h1>
            <p className="home-about-body">
              Soy Derek Lima, desarrollador junior y fundador de Lumenex Pro Solutions, donde ofrezco soluciones digitales enfocadas en resultados reales.
Aquí encontrarás una muestra de los proyectos, servicios y tecnologías que manejo.
Estoy en constante evolución y comprometido con brindar calidad, innovación y valor a cada cliente.
              <br />
              <br />Actualmente soy desarrollador frontend, en constante mejora y estudio del desarrollo backend para convertirme en un desarrollador fullstack.
              <i>
                <b className="purple"> Domino lenguajes clásicos como C++, JavaScript y java, lo que me permite adaptarme a distintos entornos y desafíos de desarrollo. </b>
              </i>
              <br />
              <br />
              Me apasiona el desarrollo y el proceso de crear soluciones desde cero, siempre buscando formas de innovar y mejorar lo existente.
              <i>
                <b className="purple">aplico mi pasión por construir soluciones  </b> 
                 utilizando Node.js y modernas librerías y frameworks de JavaScript, {" "}
                <b className="purple">
                  como React.js y Next.js.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuentrame</h1>
            <p>
              En mis redes <span className="purple">y contactame </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Manco33"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/lima1450119"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/derek-lima-356a3222b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lima_derek_rodriguez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
