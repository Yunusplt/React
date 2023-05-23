import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";

const Home = () => {

const [gorevler, setGorevler] = useState([]);

const getBilgiler=()=>{
  setGorevler(Data);
  console.log(Data);
}

useEffect(()=>{
  getBilgiler()
},[])


const postGorev=(newData)=>{
  console.log(newData);
  gorevler.push(newData)
  console.log(gorevler);
  console.log(Data);
  getBilgiler()
  // setGorevler(Data)
}

  return (
    <div>
      <GorevEkle postGorev={postGorev}  gorevler={gorevler}/>

      <GorevleriGoster  gorevler={gorevler}/>
    </div>
  );
};

export default Home;
