import { createSlice } from "@reduxjs/toolkit";

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

const achievements = createSlice({
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

export default achievements.reducer;
export const setAchievements = achievements.actions.setAchievements;
export const updateAchievements = achievements.actions.updateAchievements;
