

import React from 'react'
//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor
//todo parametreli foksiyonlar hemen calisir. digerlerinde fonksiyon oldugu hemen anlasilmadigi icin calismaz. arttir butonundaki gibi... PARAMETRE VAR ISE HEMEN CALISIR!!!!!!!!!!!#########################
const Events = () => {
    //! Javascript area
    let baslik = "MERHABA";
    let count = 0;
    const arttir =()=> {
        count = count +1
        document.querySelector("span").textContent = count
    }

    const butonBaslik=(a)=> {
        document.querySelector(".btn-info").textContent = a

    }
  return (
    //! React area (jsx area)
    <div className='container text-center mt-4'>
    <h1>INFO : {baslik}</h1>
    <h2>Count : <span>{count}</span></h2>
    <button className='btn btn-primary' onClick={arttir} >ARTTIR</button>
    <button className='btn btn-info' onClick={()=>butonBaslik(new Date().getFullYear())}>TEMIZLE</button>
    <button className='btn btn-danger' onClick={()=>alert("buton tiklandi")}>TIKLANDI</button>
    </div>
  )
}

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------
export default Events