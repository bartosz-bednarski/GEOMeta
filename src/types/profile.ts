export type warningState = {
  status: boolean;
  message: string;
};
export type loaderState = {
  status: boolean;
  type: string;
};
export type quizAchievementsProps = {
  type: "Flagi" | "Herby" | "Rejestracje";
  points: string;
  games: string;
};
