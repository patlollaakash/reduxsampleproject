import { createSlice } from "@reduxjs/toolkit";

import { userList } from "../common/Uselistdata";

const userlistSlice = createSlice({
  name: "getuserlist",
  initialState: userList,
  reducers: {
    addUsers: (state, action) => {
      state.push(action.payload);
    },
    updateUsers: (state, action) => {
      const { id, name, email } = action.payload;
      return state.map((user) =>
        user.id === id ? { ...user, name, email } : user
      );
    },
    deleteUsers: (state, action) => {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export const { addUsers, updateUsers, deleteUsers } = userlistSlice.actions;
export default userlistSlice.reducer;
