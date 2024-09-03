import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    currency: "RUB",
  },
  reducers: {
    updataCurrency(state, currentCurrency) {
      state.currency = currentCurrency.payload;
    },
  },
});

export default currenciesSlice.reducer;
export const { updataCurrency } = currenciesSlice.actions;
