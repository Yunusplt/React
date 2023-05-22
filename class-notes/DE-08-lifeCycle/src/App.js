import React, {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import LifeCycleMethods from "./components/LifeCycleMethods";
import "./App.css"
import OrnekUseEffect from "./components/OrnekUseEffect";
import Clock from "./components/Clock";
import People from "./components/useEffect-fetch-axios/People";


function App() {

  const[goster, setGoster] = useState(true)
  return (
    <div className="container text-center">
      {/* <LifeCycleMethods/> */}

      {/* <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
        Göster
      </button> */}
      {/* {goster ? <OrnekUseEffect /> : ""} */}
      {/* {goster && <OrnekUseEffect />} */}

      {/* goster true iken OrnekUseEffect componenti görünsün, false durumunda hiçbirşey yapma */}
      {/* && iki parametrede doğruyken kullanılır, || soldaki doğruysa yada
      sağdaki doğruysa, hangisi true ise onu al */}
      {/* {goster ? <Clock/> : ""} */}
      <People/>
    </div>
  );
}

export default App;
