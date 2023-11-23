import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth-reducer";
import achievementsReducer from "./achievements-reducer";
const store = configureStore({
  reducer: {
    auth: auth,
    achievements: achievementsReducer,
  },
});
export default store;
