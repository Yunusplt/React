import React from "react";
import { FaTimesCircle } from "react-icons/fa";
// import Data from "../helper/Data";

//!https://react-icons.github.io/react-icons


const GorevleriGoster = ({gorevler, getBilgiler}) => {
console.log(gorevler);
  // const [data, setData] = useState(Data)


  // const deleteData=((id)=>{
  // const confirm = window.confirm("Silmek istediğinizden emin misiniz?");
  // const newDataaa = Data.filter(item => item !== id)
  // console.log(newDataaa);
  //   setData(data.filter(item=>item.id !== id))
  //   console.log(id);
  //   console.log(gorevler);
  //   console.log(data);
  //   getBilgiler()
  // })

  return (
    <div>
      {gorevler.map((x) => {

        return (
          <div key={x.id}>
            <h3>
              {x.text}
              <FaTimesCircle
                style={{ color: "red", cursor:"pointer"}}
                type="button"
              //  onClick={()=>deleteData(x.id)}
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
