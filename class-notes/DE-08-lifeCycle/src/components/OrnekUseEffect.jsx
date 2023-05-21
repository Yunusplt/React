// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);


import React, {useState,useEffect} from "react";

const OrnekUseEffect = () => {
    const[sayac, setSayac] = useState(0)
    //todo ilk bunu göster.
    //todo componentDidMount _> component ilk render edildiginde calis
    // useEffect(() => {
    //     console.log("componentDidMount")
    //     setTimeout(()=>{
    //         alert("veri getirildi...")
    //     },3000)
    // },[])

    //todo ikinci olarak bunu göster
    //todo count her degistiginde calissin, sooo componentDidUpdate
    //todo useEffectin sonuna parantez icerisinde count yapilirsa count her degistiginde useEffect calisir. sayfa ilk yüklendiginde de calisir. 
    // useEffect(() => {
    //     console.log("componentDidUpdate")
    //     setTimeout(()=>{
    //         alert("veri updated..")
    //     },3000)
    // },[sayac])

    //todo ucuncu (son ) olarak bunu göster.
    //todo component öldügünde basksa sayfaya gidildiginde 
    useEffect(()=>{
            const time = setInterval(()=>{
            console.log("interval calismaya basladi");
        },1000)

        //! component ölünce(göster butonuna tiklayinca return runs)
        return()=>{
            clearInterval(time)
            console.log("component öldü");
             console.log("componentWillUnmount"); 
        }

    },[])

  return (<div>
    <h3>COUNT : {sayac}</h3>
    <button className="btn btn-warning" onClick={()=> setSayac(sayac+1)}>ARTTIR</button>
  </div>
  )
};

export default OrnekUseEffect;
