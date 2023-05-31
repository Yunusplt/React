import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Details from "./pages/details/Details";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details/>} />
        </Routes>
       <Footer/> 
      </Router>
    </div>
  );
}

export default App;
