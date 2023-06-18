


// // const API_KEY = '02d142c50d8b4247b974b25323435174';
//   // const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e";

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios"
 

// export const getData = createAsyncThunk(
//   "haberSlice/getData",

//   async () => {
//     const data = await axios(
//       "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
//     );
//     console.log(data);
//     return data.data.articles;
//   }
// );

// export const haberSlice = createSlice({
//   name: "haberSlice",

//   initialState: {
//     haberler: [],
//     loading: true,
//   },
//   reducers: {
//     //todo functions to here.
//   },
//   //todo sadece apiden veriler cekilirken lazim...asagisi
//   extraReducers: (builder) => {
//     builder
//       .addCase(getData.pending, (state) => {
//         state.loading=true
//       })
//       .addCase(getData.fulfilled, (state, action) => {
//         state.haberler=action.payload
//         state.loading=false
//       });
//   },
// });

// export default haberSlice.reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "haberSlice/getData",

  async () => {
    const data = await axios(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
    );
    //  console.log(data.data.articles);
    return data.data.articles;
  }
);

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },
  reducers: {
    newsSil:(state)=>{
      console.log(state);
      state.haberler = [];
      state.loading = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        console.log(action);
        state.haberler = action.payload;
        state.loading = false;
      });
  },
});

export const { newsSil } = haberSlice.actions;

export default haberSlice.reducer;