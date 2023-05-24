import { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { doktorData, hastaData } from "../helper/Data";

const Home = () => {
  
const[hastalar, setHastalar] = useState(hastaData)
const[doktorlar, setDoktorlar] = useState(doktorData)
const[buton, setButon] = useState(true)

 const doktorClick = (abc) => {
   if (buton) {
     setButon(false);
     setDoktorlar(doktorlar.filter((i) => i.id === abc));
   } else {
     setButon(true);
     setDoktorlar(doktorData);
   }
 };
  

  return (
    <div style={{ display: buton ? "block" : "flex" }}>
      <div>
        <header className="header">
          <h1>HOSPİTAL</h1>
          <div className="dr">
            {doktorlar.map((dr) => (
              <div key={dr.id}>
                <img
                  src={dr.resim}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{
                    backgroundColor: buton === true ? "aqua" : "lightgreen",
                  }}
                  onClick={() => doktorClick(dr.id)}
                />
                <h4
                  style={{
                    backgroundColor: buton ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${buton ? "blue" : "green"}`,
                  }}
                >
                  {dr.doktor}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {!buton && (
          <HastaEkle
            hastalar={hastalar}
            setHastalar={setHastalar}
            doktorlar={doktorlar}
          />
        )}
      </div>

      <HastaListe
        hastalar={hastalar}
        setHastalar={setHastalar}
        doktorlar={doktorlar}
      />
    </div>
  );
};

export default Home;
