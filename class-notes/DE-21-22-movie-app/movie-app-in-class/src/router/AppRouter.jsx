import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return <>
  <BrowserRouter>
  {/* Navbarin her sayfada gözükmesini istedigimiz icin buraaya tanimliyoruz. */}
  <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/register/:id" element={<MovieDetail/>}/>
    </Routes>
  </BrowserRouter>
  </>;
};

export default AppRouter;
