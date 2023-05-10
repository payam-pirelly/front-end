import { createSlice } from "@reduxjs/toolkit";
import { carData } from "src/utils/carData";

const initialState = {
  car: carData,
  carIndex: 1,
  carStatus: "360Item",
  fullScreen: false,
  fullScreenContent: "",
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    toggledCarIndex: (state, action) => {
      state.carIndex = action.payload;
      state.carStatus = "carItem";
    },
    toggledCarStatus: (state, action) => {
      state.carStatus = action.payload;
    },
    toggledFullScreen: (state, { payload }) => {
      state.fullScreen = payload;
    },
  },
});

export default carSlice.reducer;
export const { toggledCarIndex, toggledFullScreen, toggledCarStatus } = carSlice.actions;
