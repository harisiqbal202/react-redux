import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {
    id: 1,
    name: "ali",
    age: 23,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
