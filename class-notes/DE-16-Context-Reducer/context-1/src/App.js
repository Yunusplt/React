import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";

export const OgrenciContext = createContext();
//!createContext() ile context olusturulur. bunu Home da kullanmak icin home bunun ile sarmallanilir.
// todo Best practice de bu isimde bir component olusturulur. o yüzden büyük harfle basladi OgrenciContext..
const App = () => {
  const [ogrenci, setOgrenci] = useState(data);

  const changeRenk = (id, newRenk) => {
    setOgrenci(
      ogrenci.map((a) => (a.id === id ? { ...a, color: newRenk } : a))
    );
  };

  return (
    //! burada OgrenciContext.Provider ile sarmallanir. value ile ogrenci degiskeni ve changeRenk functionu home a gönderirlir.
    <OgrenciContext.Provider value={{ ogrenci, changeRenk }}>
      <Home />
    </OgrenciContext.Provider>
  );
};

export default App;
