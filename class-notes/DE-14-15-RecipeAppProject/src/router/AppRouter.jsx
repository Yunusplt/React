import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Footer from "../components/footer/Footer";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        {/* <Route path="/about" element={<About />} /> */}

        {/* <Route path="/home" element={<Home />} /> */}

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/details" element={<Details />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
