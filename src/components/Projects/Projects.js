import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              isBlog={false}
              title="Sistema de login con hash POO"
              description="Sistema de login robusto con hash, implementado con Programación Orientada a Objetos y conectado a una base de datos."
              ghLink="https://github.com/Manco33/Sistema-de-login-con-hash-POO-conexi-n-a-base-de-datos.git"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sistema de Gestión de Pacientes en Java"
              description="Aplicación modular en Java para la gestión eficiente de pacientes, facilitando el control y seguimiento de historiales."
              ghLink="https://github.com/Manco33/Sistema-de-Gesti-n-de-Pacientes-en-Java-Estructura-Modular-.git"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Historial web con pila hash MySQL"
              description="Sistema de historial web que organiza y almacena datos usando una pila, hash y base de datos MySQL para acceso rápido."
              ghLink="https://github.com/Manco33/historial-web-con-pila-hash-mysql.git"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Agenda hash POO base de datos"
              description="Agenda interactiva desarrollada con POO, que utiliza tablas hash para una gestión eficiente de contactos y eventos, conectada a una base de datos."
              ghLink="https://github.com/Manco33/agenda-hash-poo-base-de-datos.git"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Gestor de archivos Java"
              description="Herramienta en Java para organizar y manipular archivos, ofreciendo funcionalidades como creación, eliminación y búsqueda."
              ghLink="https://github.com/Manco33/gestor-de-archivos-java"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Amigo secreto"
              description="Aplicación web lúdica para organizar el juego de 'amigo secreto', desarrollada con HTML, CSS y JavaScript."
              ghLink="https://github.com/Manco33/amigo-secreto"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Ejercicio JavaScript: Número Secreto"
              description="Juego interactivo de adivinanza de números en JavaScript, ideal para practicar lógica y manejo del DOM (HTML, CSS, JavaScript)."
              ghLink="https://github.com/Manco33/ejercicio-javascrip-numero-secreto-.git"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Página de certificados"
              description="Diseño y desarrollo de una página web para mostrar y gestionar certificados de forma clara y accesible (JavaScript, HTML, CSS)."
              ghLink="https://github.com/Manco33/pagina-certificados"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Proyecto Netbeans (Java)"
              description="Proyecto de aplicación en Java desarrollado en el entorno de Netbeans, demostrando habilidades de programación y uso de IDEs."
              ghLink="https://github.com/Manco33/proyecto-netbeans"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Calculadora del MRU y MRUV"
              description="Calculadora interactiva para el Movimiento Rectilíneo Uniforme (MRU) y el Movimiento Rectilíneo Uniformemente Variado (MRUV) (HTML, CSS, JavaScript)."
              ghLink="https://github.com/Manco33/calculadora-del-mru-y-mruv"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Página web"
              description="Desarrollo de una página web básica utilizando las tecnologías fundamentales: HTML, CSS y JavaScript."
              ghLink="https://github.com/Manco33/paginaweb"
              demoLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Página con WordPress para cliente"
              description="Sitio web profesional desarrollado en WordPress para un cliente, demostrando habilidades de diseño y gestión de CMS."
              ghLink="https://grupovisaabogados.com"
              demoLink="https://grupovisaabogados.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Página web de cursos"
              description="Plataforma web para cursos en línea, construida con JavaScript, TypeScript y CSS, optimizada para la experiencia del usuario."
              ghLink="https://studio--coursecentral-aykp5.us-central1.hosted.app"
              demoLink="https://studio--coursecentral-aykp5.us-central1.hosted.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
