import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, { payload }) => {
      //! action.payload dememek icin payload süslü icerisinde yazildi.
      state.loading = false;
      state.currentUser = payload.username;
      state.token = payload.token;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, registerSuccess } = authSlice.actions;
export default authSlice.reducer;

//* Burada reducer'lar bulunur dispatch yayinlamak icin
