import { useContext } from "react";
import AnaUser from "./AnaUser";
import { KullaniciContext } from "../App";
const Isimler = () => {
  const { kullanici } = useContext(KullaniciContext);

  return (
    <div>
      {/* diziden 4 tane isim yazdır */}
      {kullanici.slice(0, 4).map((i) => (
        <div style={{ background: "pink" }}>{i.login}</div>
      ))}

      <AnaUser kullanici={kullanici}/>
    </div>
  );
};

export default Isimler;
