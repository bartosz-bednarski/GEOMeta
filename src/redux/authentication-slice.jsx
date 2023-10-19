import { createSlice } from "@reduxjs/toolkit";
const authenticationInitialState = {
  loggedIn: false,
  userName: "",
  profileIconBackgroundColor: "#09c8e2b3",
};

const authentication = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = true;
      state.userName = action.payload.userName;
      state.profileIconBackgroundColor = action.payload.iconBackgroundColor;
    },
    setLoggedOut(state) {
      state.loggedIn = false;
      state.userName = "";
    },
  },
});
//UNUSED !!!
export const authenticationActions = authentication.actions;
export default authentication.reducer;
