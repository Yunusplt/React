import React, { useState } from 'react'

const Hooks = () => {
  //! useState Hook is written on top.
    const [sayac, setSayac]=useState(0)
    
    const [kisi, setKisi] = useState({
        isim : "Özlem",
        email:"ozlem@hotmail.com",
        yas : 39,
        renk : "red"
    })

    const degistir =()=>{
        if(kisi.isim == "Özlem"){
          setKisi({
          isim: "Nihal",
          email: "nihal@hotmail.com",
          yas: 29,
          renk: "green",
        });
        }else{
            setKisi({
              isim: "Özlem",
              email: "ozlem@hotmail.com",
              yas: 39,
              renk: "red",
            });

        }

    }
   
    const arttir = ()=>{
        setSayac(sayac+1)
    }

    const azalt =()=>{
        setSayac(sayac-1)
    }



  return (
    <div className='container'>
        <h2>********************************************************</h2>
        <h1>USESTATE</h1>
        <h2>COUNT: {sayac}</h2>
        <button className='btn btn-primary' onClick={arttir}>ARTTIR</button>
        <button className='btn btn-danger' onClick={azalt}>AZALT</button>
        <button className='btn btn-warning' onClick={()=>setSayac(0)}>TEMIZLE</button>
        <h1>********************************************************</h1>
        <div className='text-center mt-4'>
        <h1 className='text-danger'>Object ile useState kullanimi</h1>
        <h2>{kisi.isim}</h2>
        <h3>{kisi.email}</h3>
        <h5>{kisi.yas}</h5>
        <button style={{backgroundColor:kisi.renk}} className='btn btn-danger' onClick={degistir}>CHANGE</button>

        </div>
    </div>
  )
}

export default Hooks