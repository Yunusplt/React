import { createSlice } from "@reduxjs/toolkit";


const yetkiSlice=createSlice({
    name:"yetkiSlice",

    initialState:{
        email:"",
        password:""
    },

    reducers:{
        //todo istedigin kadar function tanimla buraya
        olusturKullanici:(state,action)=>{
            state.email=action.payload.email;
            state.password=action.payload.password;
        },
        kullaniciSil:(state)=>{
            state.email=""
            state.password=""
        }
    }

})

//todo sayfanin functionlari export
export const {olusturKullanici,kullaniciSil}= yetkiSlice.actions
//todo sayfanin tümü export
export default yetkiSlice.reducer;