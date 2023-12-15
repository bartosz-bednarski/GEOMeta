import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
const achievementsInitialState = {
  upToDate: false,
  flagsQuiz: {
    name: "Flagi",
    points: "",
    games: "",
  },
  emblemsQuiz: {
    name: "Herby",
    points: "",
    games: "",
  },
  platesQuiz: {
    name: "Rejestracje",
    points: "",
    games: "",
  },
};

const achievementsSlice = createSlice({
  name: "Achievements",
  initialState: achievementsInitialState,
  reducers: {
    setAchievements: (state, action) => {
      state.upToDate = true;
      state.flagsQuiz = {
        name: "Flagi",
        points: action.payload.flags_quiz_score,
        games: action.payload.flags_quiz_counter,
      };
      state.emblemsQuiz = {
        name: "Herby",
        points: action.payload.emblems_quiz_score,
        games: action.payload.emblems_quiz_counter,
      };
      state.platesQuiz = {
        name: "Rejestracje",
        points: action.payload.plates_quiz_score,
        games: action.payload.plates_quiz_counter,
      };
    },
    updateAchievements: (state) => {
      state.upToDate = false;
    },
  },
});

export default achievementsSlice.reducer;
export const selectAchievements = (state: RootState) => state.achievements;
export const setAchievements = achievementsSlice.actions.setAchievements;
export const updateAchievements = achievementsSlice.actions.updateAchievements;
