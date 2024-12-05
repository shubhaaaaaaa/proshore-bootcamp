import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
    initialState: {
      username: localStorage.getItem("username") || "",
  },
  reducers: {
      storeName: (state, action) => {
          state.username = action.payload
          localStorage.setItem("username", action.payload);
    }
  },
});

export const { storeName } = userSlice.actions;
export default userSlice.reducer;
