import { configureStore } from "@reduxjs/toolkit";
import getuserlistReducer from "../reduxtoolkit/uselist";

export const store = configureStore({
  reducer: {
    getuserlist: getuserlistReducer,
  },
});
