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
        }
    }

})

//todo sayfanin functionlari export
export const {olusturKullanici}= yetkiSlice.actions
//todo sayfanin tümü export
export default yetkiSlice.reducer;