import React from "react";
import {Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      {/* BrowserRouteri buradan kaldiriyouz ve index.js ye yaziyorz. cünkü context yapisi routerin icinde olmali. bu sekilde sadece AppRouter contextin icin de. yani context ile appRouter sarmallaniyor. context routerin disinda kaliyor. */}
      {/* Navbarin her sayfada gözükmesini istedigimiz icin buraaya tanimliyoruz. */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter/>}>
          <Route path="" element={<MovieDetail />} />
        </Route>  
      </Routes>
    </>
  );
};

export default AppRouter;
