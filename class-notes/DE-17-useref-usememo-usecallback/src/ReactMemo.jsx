import React, { useState } from 'react'
import Header from './components/Header'
import fullstack from './assets/cw_logo.png'

const ReactMemo = () => {

  const [sayac, setSayac] = useState(0)
  const [resim, setResim] = useState()

  const arttir =()=>{
    setSayac(sayac+1)
  }

  return (
    <div>
    {/* todo her renderda header birdaha yukleniyor. buyuk verilerde bu problem. bunu engellemek icin header a git ver Headeri memo sarmalina al */}
      <Header resim={resim}/>
      <p>COUNT: {sayac}</p>
      <button
      onClick={arttir}
      >INCREASE</button>
      <button 
      onClick={()=>setResim(fullstack)}
      >FULLSTACK</button>
    </div>
  )
}

export default ReactMemo