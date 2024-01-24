//* Ayni BaseUrl kullanarak requestler olusturacagimiz icin bu file a ihtiyac var.
//* Her sayfada ayri ayri request islemleri gerceklestirmek yerine hepsini tek file'dan yürütecegiz.
//* buradaki request islemleri authentication ile alakali oldugu icin authCall.js ismi verildi.

// import axios from "axios"

export const register = async (userInfo) => {
  const dispath = useDispatch();
};

//* register islemindeki request icin register functionu olusturuyoruz.
//* requestden dönen verileri DISPATCH ile STORE a aktarmaliyiz.
//* bunun icin useDispatch () hookuna ihtiyacimiz var.
//* Fakat bu hook React Hooku oldugu icin bunu bir  JS function icerisinde kullanamiyoruz.
//* Bu yüzden ortaya CUSTOM HOOK ihtiyaci doguyor...
//* hooks folder i creat ettik. Look at this folder.
