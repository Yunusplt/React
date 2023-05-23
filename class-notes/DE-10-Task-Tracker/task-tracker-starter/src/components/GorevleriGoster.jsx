import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons
const GorevleriGoster = ({gorevler,setGorevler}) => {

const deleteTask =(taskId)=>{
  setGorevler(gorevler.filter((x)=>x.id !== taskId))
}

const cizTask=(taskId)=>{
  setGorevler(gorevler.map((x)=>{x.id === taskId ? className="" })
}

console.log(gorevler);

  return (
    <div>
      {gorevler.map((x) => {

        return (
          <div
          key={x.id}
          onDoubleClick={()=> cizTask(x.id)}
          className="gorev"
          >
            <h3>
              {x.text}
              <FaTimesCircle
                style={{ color: "red" }}
               onClick={()=> deleteTask(x.id)}
              />
            </h3>
            <h6>{x.day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
