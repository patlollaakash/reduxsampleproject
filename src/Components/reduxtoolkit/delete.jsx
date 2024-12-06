import { createSlice } from "@reduxjs/toolkit";

const createUserdeleteSlice = createSlice({
  name: "deleteactions",
  reducers: {
    deleteUserlist: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { deleteUserlist } = createUserdeleteSlice.actions;
export default createUserdeleteSlice.reducer;
