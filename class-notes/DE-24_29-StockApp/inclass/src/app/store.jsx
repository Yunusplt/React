import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
//todo authSlice sayfasindan export edilen (export default authSlice.reducer;) burada authReducer olarak karsilaniyor. export default olarak export edilenler farkli isimler import edilebilir. 
import stockReducer from "../features/stockSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// localStorage.setItem("user", user)

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
export default store;




//?devTools: process.env.NODE_ENV !== "production",
//todo(ChatGPT) Bu syntax, genellikle geliştirme sırasında kullanışlıdır çünkü geliştirme sırasında ek hata ayıklama (debugging) veya geliştirmeyle ilgili işlemler yapmak için ek kod veya özellikler eklenmesini sağlar. Örneğin, geliştirme ortamında hata ayıklama araçlarının kullanılması, logların yazdırılması veya ek hata kontrollerinin yapılması gibi işlemler bu syntax sayesinde aktif hale getirilebilir. Ancak, üretim ortamında bu ek işlemlerin performansa veya güvenilirliğe etkisi olabileceği için devre dışı bırakılmaları tercih edilir. Bu yaklaşım, kodun geliştirme ortamında daha esnek ve kullanıcı dostu olmasını sağlar, ancak üretim ortamında daha hafif ve optimize edilmiş bir kodun çalışmasına olanak tanır.
//todo redux devtools, deployment sonrasinda kullanmamak icin env ye bu degisken tanimlanir. canliya gectiginde baska kullanicilar statelerimizin icini göremicek...

//! Starter hali 
//* import { configureStore } from "@reduxjs/toolkit";
//* import authReducer from "../features/authSlice";

//* const store = configureStore({
//*   reducer: {
//*     auth: authReducer,
//*   },
//*   devTools: process.env.NODE_ENV !== "production",

//* });

//* export default store;
