import { createSlice } from "@reduxjs/toolkit";

const nameTrainer = createSlice({
  name: "nameTrainer",
  initialState: "",
  reducers: {
    setNameTrainer: (state, action) => action.payload,
  },
});

export const { setNameTrainer } = nameTrainer.actions;

export default nameTrainer.reducer;
