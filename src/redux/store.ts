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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
