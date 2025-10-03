import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try {
    return JSON.parse(localStorage.getItem("orders_v1")) || [];
  } catch {
    return [];
  }
};

const save = (state) => {
  try {
    localStorage.setItem("orders_v1", JSON.stringify(state));
  } catch {}
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: load(),
  reducers: {
    addOrder: (state, action) => {
      state.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: action.payload,
      });
      save(state);
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
