
import { useContext } from "react";
import AnaUser from "./AnaUser";
import { KullaniciContext } from "../App";
const Isimler = () => {

  const {kullanici} = useContext(KullaniciContext)
  // console.log(kullanici.slice(0,4));
 return (
   <div>
     {/* buraya diziden 4 adet isim yazdirilacak  */}
     {kullanici.slice(0, 4).map((i) => (
       <div>{i.login}</div>
     ))}
     <AnaUser />
   </div>
 );
}

export default Isimler