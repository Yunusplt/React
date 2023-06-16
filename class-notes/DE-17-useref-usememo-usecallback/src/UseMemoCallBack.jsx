import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from "axios"
import Users from './components/Users'

const UseMemoCallBack = () => {

  const [kisiler, setKisiler] = useState([])
  const [text, setText] = useState("")  //! diziyi filtrelemek icin lazim. 
  const [bitmisHali, setBitmis]=useState("")
  

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setKisiler(res.data))
    //todo axios da json a cevirmedigimiz icin burada fazladan res.data yaziyoruz...

  }, [])
//todo her yazdigimda degilde search e basinca gelsin diye asagiyi yoruma aldim.
//  const filtreli =  kisiler.filter((i)=>i.name.includes(text) )
//  const filtreli =  kisiler.filter((i)=>i.name.includes(bitmisHali) )
//todo hintergrund daki renderlardan kurtulmak icin usememoya alacaz.

const filtreli = useMemo(()=>kisiler.filter((i)=>i.name.includes(bitmisHali)),[kisiler,bitmisHali])

const ekle = useCallback(() => {
  setKisiler([...kisiler, { id: kisiler.length + 1, name: "osman" }]);
}, [kisiler]);

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setBitmis(text)}>SEARCH</button>
      <button onClick={ekle} id="add-button">
        EKLE
      </button>
      {/* <Users kisiler={kisiler}/> */}
      <Users kisiler={filtreli} />
    </div>
  );
}

export default UseMemoCallBack;



//todo with useRef


// import React, { useEffect, useRef, useState } from 'react'
// import axios from "axios"
// import Users from './components/Users'

// const UseMemoCallBack = () => {

//   const [kisiler, setKisiler] = useState([])
//   const [text, setText] = useState("")
//   const [bitmisHali, setBitmis]=useState("")

//   const InputRef = useRef()

//   useEffect(() => {

//     axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setKisiler(res.data))
//     //todo axios da json a cevirmedigimiz icin burada fazladan res.data yaziyoruz...

//   }, [])
//   console.log(kisiler);
// //todo her yazdigimda degilde search e basinca gelsin diye asagiyi yoruma aldim.
// //  const filtreli =  kisiler.filter((i)=>i.name.includes(text) )
//  const filtreli =  kisiler.filter((i)=>i.name.includes(text) )

//   return (
//     <div>
//       <input type="search" ref={InputRef} />
//       <button 
//       onClick={()=>setText(InputRef.current.value)}
//       >SEARCH</button>
//       {/* <Users kisiler={kisiler}/> */}
//       <Users kisiler={filtreli}/>
//     </div>
//   )
// }

// export default UseMemoCallBack