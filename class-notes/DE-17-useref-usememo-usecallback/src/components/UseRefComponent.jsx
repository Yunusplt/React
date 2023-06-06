// import React, { useRef, useState } from "react";
import React, { useRef} from "react";

// const UseRefComponent = () => {

//   //? 1.kullanim. az tercih edilen.
//   const [sayac, setSayac] = useState(0);
//   const sayacRef = useRef(0)

//   console.log("sayac", sayac);
//   console.log("sayacRef" , sayacRef);

//   const arttir =()=>{
//     setSayac(sayac+1)
//     //todo burada setsayac kapatilirsa render yapilirken sayfea basina gidemicek useState özelligi olmadigi icin. setRef le sayac artacak ama ekrana yansimayacak bu yuzden. Bilgisayari yormak istemezsem(her seferinde referans numarasi verir her render ve pc yorulur) sürekli render olsun istemezsem ama arka planda sadece sayi arttirmaya ihtiyacim varsa bu sefer useRef mantikli. 


//     sayacRef.current++
//   }

//   return (
//     <div>
//       <h2>UseRef Component</h2>
//       <h3>Sayac with useState: {sayac}</h3>
//       <h4>Sayac with useRef: {sayacRef.current}</h4>
//       {/* <input type="text" placeholder="enter a text" /> */}
//       {/* <button>Change Renk</button> */}
//       <button 
//       onClick={arttir}
//       >ARTTIR</button>
//     </div>
//   );
// };

// export default UseRefComponent;


const UseRefComponent = () => {

  //? 2. kullanim DOM elemanlarina ulasmamizi saglar.

  const inputRef = useRef()
  const divRef = useRef()

  const renkDegistir=()=>{
    divRef.current.style.backgroundColor=inputRef.current.value 
  }

  return (
    <div ref={divRef}>
      <h2>UseRef Component</h2>
      <input type="text" placeholder="enter a text" ref={inputRef}/>
      <button 
      onClick={renkDegistir}
      >Change Renk</button>
    </div>
  );
};

export default UseRefComponent;
