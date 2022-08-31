import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./Slices/nameTrainer.Slices";

export default configureStore({
  reducer: {
    nameTrainer,
  },
});
