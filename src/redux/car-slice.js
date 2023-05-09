import { createSlice } from "@reduxjs/toolkit";
import { carData } from "src/utils/carData";

const initialState = {
  car: carData,
  carIndex: 1,
  carStatus: "360Image",
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
  },
});

export default carSlice.reducer;
export const { toggledCarIndex, toggledCarStatus } = carSlice.actions;
