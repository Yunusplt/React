import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
