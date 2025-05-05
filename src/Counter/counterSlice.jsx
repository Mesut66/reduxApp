import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "click",
  initialState: {
    //başlangış değeri
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload.val;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // acitonları(method) dışarı çıkardım

export const selectCount = (state) => state.click.value;

export default counterSlice.reducer; //reducer aktarır
