import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import LifeCycleMethods from "./components/LifeCycleMethods";
import "./App.css"


function App() {
  return (
    <div className="container text-center">
      <LifeCycleMethods/>
      <button className="btn btn-danger">Göster</button>
    </div>
  );
}

export default App;
