import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [ülke, setUlke] = useState({});
  const { name } = useParams();
  //! buraya App.js deki path ile geldiğimizde, home dan gelen yoldaki name sayesinde (useParam İLE name i yakalayıp), alttaki adresten, buraya name ile gelen  ülkenin verileri çekilecek, onunla ilgili birkaç özellik ekrana bastırılacak

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setUlke(data[0]));
  }, [name]);
  // console.log(ülke[0].name);
  return <div>
    <h1>{ülke}
    </h1>
  </div>;
};

export default Details;


