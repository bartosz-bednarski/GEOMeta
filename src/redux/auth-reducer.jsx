import { createSlice } from "@reduxjs/toolkit";
const authInitialState = {
  loggedIn: false,
  accessToken: "",
  email: "",
  iconBackgroundColor: "#09c8e2b3",
  userName: "",
  usernameShort: "",
};

const auth = createSlice({
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
export const authActions = auth.actions;
export const loginUser = auth.actions.login;
export const logout = auth.actions.logout;
export const checkAuth = auth.actions.checkAuth;
export const changeShortname = auth.actions.changeUsernameShort;
export const updateAccessToken = auth.actions.updateAccessToken;
export default auth.reducer;
