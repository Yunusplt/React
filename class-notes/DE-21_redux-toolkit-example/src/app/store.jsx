

import { configureStore } from "@reduxjs/toolkit";
import yetkiSlice from "../features/yetkiSlice";
import haberSlice from "../features/haberSlice";

export const store = configureStore({
  reducer: {
    //todo buradaki yetkiSlice yetkiSlice file indaki name in karsisi
    yetkiSlice: yetkiSlice,
    haberSlice: haberSlice
  },
});
