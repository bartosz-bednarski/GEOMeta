import { configureStore } from "@reduxjs/toolkit";
import authentication from "./authentication-slice";

const store = configureStore({
  reducer: {
    authentication: authentication,
  },
});
export default store;
