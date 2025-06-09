import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// IMPORTANTE: Importa tu componente ResumeNew aquí
// Asegúrate de que la ruta sea correcta según la ubicación de tu archivo ResumeNew.jsx
// Si está en 'src/components/Resume/ResumeNew.jsx', la ruta es './components/Resume/ResumeNew'
import ResumeNew from "./components/Resume/ResumeNew"; // <-- ¡AÑADIR ESTA LÍNEA!

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          {/* ¡AÑADIR ESTA RUTA PARA EL CURRÍCULUM ANTES DEL WILDCARD! */}
          <Route path="/Resume" element={<ResumeNew />} /> {/* <-- ¡AÑADIR ESTA LÍNEA! */}
          
          {/* La ruta wildcard siempre debe ser la ÚLTIMA si no quieres que intercepte otras rutas */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;