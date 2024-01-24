//! counterActions icerisinde payload i statik olarak elimizle tanimlamistik. fakat burada payloadi childdan alacagimiz veri ile dinamik olarak geliyor.
export const temizle = () => ({ type: "TEMİZLE" });

export const ekle = (veri) => ({ type: "EKLE", payload: veri });
