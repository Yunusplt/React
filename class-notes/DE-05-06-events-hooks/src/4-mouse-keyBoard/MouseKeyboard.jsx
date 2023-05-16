import React, { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";

const MouseKeyboard = () => {

    const[xEkseni, setXekseni] = useState(0)
    const[yEkseni, setYekseni] = useState(0)
    const[inputData, setInputData] = useState("")

    //todo onMouseMove mousemun sayfa üzerindeki hareketlerini inceler. coordinat takibi yapmakta kullanilabilir.


    const mouseOlayi=(e)=>{
        console.log(e.keyCode);
        // console.log(e.clientX,e.clientY);
        // console.log(e.pageX,e.pageY);
        setXekseni(e.pageX)
        setYekseni(e.pageY)
    }

    const keyDownOlayi=(e)=>{
        console.log(e);
        if (e.keyCode >=48 && e.keyCode<=57) {
            alert("Lütfen harf giriniz.")
        }else alert("Tebrikler harf girdiniz.")
    }

  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center">
      <h2 className="text-danger">MOUSE EVENT</h2>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">{xEkseni} {yEkseni}</p>
      <div className="bg-success text-light w-50 p-4" id="coord" onMouseMove={mouseOlayi}>KOORDINATLAR <FaReact/> <FaGooglePlus/></div>

      <h2 className="text-danger mt-4">Keyboard-Clipboard Events <span>{inputData}</span></h2>
      <input type="text" className="form-control"  onKeyDown={keyDownOlayi}
        onChange={(e) => setInputData(e.target.value)} />

    </div>
  );
};

export default MouseKeyboard;
