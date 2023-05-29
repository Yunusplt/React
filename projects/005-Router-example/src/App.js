import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import Footer from "./components/footer/Footer";


function App() {
  //! burada navbar ve footer demirbaş olmalı, Home, About, Details sayfaları Route etiketleri ile Routes içinde belirlenmeli

  return (
    <div>
      <Router>
        <MyNavbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details/:namee" element={<Details/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
