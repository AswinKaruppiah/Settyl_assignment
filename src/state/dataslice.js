import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "api",
  initialState: {
    data: null,
    components: [],
  },
  reducers: {
    setdata: (state, item) => {
      item = item?.payload?.products?.slice(0, 7);
      state.data = item;
    },
    setComponent: (state) => {
      const type = ["bar", "line", "Doughnut"];
      state.components = [
        ...state.components,
        type[Math.floor(Math.random() * 3)],
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setdata, setComponent } = counterSlice.actions;

export default counterSlice.reducer;
