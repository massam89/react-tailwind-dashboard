import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    menu: menuSlice,
  },
});

export default store;
