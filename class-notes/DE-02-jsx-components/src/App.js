import React from "react"
import Msg from "./msg/Msg";
import Clock from "./clock/Clock";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Clock/>
      <Msg/>
      <Footer/>
    </div>
  );
}

export default App;
