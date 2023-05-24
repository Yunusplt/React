import React from 'react'
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({hastalar, setHastalar, doktorlar}) => {
  return (
    <div>
      {hastalar.map((hasta)=>{
        return (
          <div key={hasta.id}>
            {doktorlar.length > 1 ? (
              <div
                className={hasta.bittiMi ? "trueBittiStil" : "falseBitmediStil"}
                onDoubleClick={() =>
                  setHastalar(
                    hastalar.map((a) =>
                      a.id === hasta.id ? { ...a, bittiMi: !a.bittiMi } : a
                    )
                  )
                }
              >
                <div>
                  <h2>{hasta.text}</h2>
                  <h4>{hasta.day}</h4>
                  <h3>{hasta.doktorum}</h3>
                </div>
                <FaTimesCircle
                  style={{ color: "red" }}
                  onClick={() =>
                    setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                  }
                />
              </div>
            ) : (
              doktorlar[0].doktor === hasta.doktorum && (
                <div
                  className={
                    hasta.bittiMi ? "trueBittiStil" : "falseBitmediStil"
                  }
                  onDoubleClick={() =>
                    setHastalar(
                      hastalar.map((a) =>
                        a.id === hasta.id ? { ...a, bittiMi: !a.bittiMi } : a
                      )
                    )
                  }
                >
                  <div>
                    <h2>{hasta.text}</h2>
                    <h4>{hasta.day}</h4>
                    <h3>{hasta.doktorum}</h3>
                  </div>
                  <FaTimesCircle
                    style={{ color: "red" }}
                    onClick={() =>
                      setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                    }
                  />
                </div>
              )
            )}
          </div>
        );
      })}
    </div>
  )
}

export default HastaListe