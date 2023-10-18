import { createSlice } from "@reduxjs/toolkit";
const authenticationInitialState = {
  loggedIn: false,
  userName: "",
};

const authentication = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = true;
      state.userName = action.payload.userName;
    },
    setLoggedOut(state) {
      state.loggedIn = false;
      state.userName = "";
    },
  },
});

export const authenticationActions = authentication.actions;
export default authentication.reducer;
