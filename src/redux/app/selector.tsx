import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const appSelector = (state: RootState) => {
  return state.app;
};

export const selectAppSelector = createSelector(appSelector, (state) => state);
