import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard';
import ContactForm from './pages/ContactForm';
import NotFound from './pages/NotFound';
import CardDetails from './pages/CardDetails';
import TeacherDetails from './pages/TeacherDetails';
// import { BrowserRouter as Router } from 'react-router-dom'; //todo güncellendigi icin eski ismi ile kullanmak istiyorsan bu yol izlenebilir.


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          {/* <Home/> */}
          <Route exact path="/" element={<Home />}/>
          <Route path="/teacher" element={<Teacher/>}/>
          <Route path="/teacher/:id" element={<TeacherDetails/>}/>
          <Route path="/courses" element={<CourseCard/>}/>
          <Route path="/courses/:namee" element={<CardDetails/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App