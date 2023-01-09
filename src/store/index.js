import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import menuSlice from "./menu/menuSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    menu: menuSlice
  }
});

export default store;
