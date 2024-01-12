import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: action.payload.email,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        })
      );
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearUser: (
      state,
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({})
      );
      state.email = '';
      state.accessToken = '';
      state.refreshToken = '';

      window.location.reload();
    },
  },
});

export const selectAuth = (state) => state.auth;
export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;


