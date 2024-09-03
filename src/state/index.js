import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currenciesSlice from "./currenciesSlice";

export const rootReducer = combineReducers({
  currencies: currenciesSlice,
});

export const store = configureStore({ reducer: rootReducer, devTools: true });
