import React from "react";
import { useContext } from "react";
import { KullaniciContext } from "../App";


const AnaUser = ({kullanici}) => {
  //todo burada kullanici Props olarak bir önceki sayfadan yani parentden cchilda gönderilmis. istersek ikisini de ccontextle alabilirdik.
//  const{kullanici,degistirWidth}=useContext(KullaniciContext)
const {  degistirWidth } = useContext(KullaniciContext);
console.log(kullanici);
  return (
    <div>
      {kullanici.map((i) => {
        return (
          <div key={i.id}>
            <h3>{i.login}</h3>
            <img src={i.avatar_url} alt="" width={i.width} />

            <div>
              <label htmlFor={i.id}>Image width(px)</label>
              <input
                id={i.id}
                type="number"
               onChange={(e)=>degistirWidth(i.id,e.target.value)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnaUser;
