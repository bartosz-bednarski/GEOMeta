import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
const authInitialState = {
  loggedIn: false,
  accessToken: "",
  email: "",
  iconBackgroundColor: "#09c8e2b3",
  userName: "",
  usernameShort: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.iconBackgroundColor = action.payload.iconBackgroundColor;
      state.userName = action.payload.userName;
      state.usernameShort = action.payload.usernameShort;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.accessToken = "";
      state.email = "";
      state.iconBackgroundColor = "";
      state.userName = "";
      state.usernameShort = "";
    },
    checkAuth: (state, action) => {
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.iconBackgroundColor = action.payload.iconBackgroundColor;
      state.userName = action.payload.userName;
      state.usernameShort = action.payload.usernameShort;
    },
    changeUsernameShort: (state, action) => {
      state.usernameShort = action.payload;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});
//UNUSED !!!
export const authActions = authSlice.actions;
export const loginUser = authSlice.actions.login;
export const logout = authSlice.actions.logout;
export const checkAuth = authSlice.actions.checkAuth;
export const changeShortname = authSlice.actions.changeUsernameShort;
export const updateAccessToken = authSlice.actions.updateAccessToken;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
