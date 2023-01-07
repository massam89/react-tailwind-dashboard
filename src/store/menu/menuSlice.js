import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "./menuItems";

const menuSlice = createSlice({
  name: "menu",
  initialState: { menuItems: [...menuItems] },
  
  },
);

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
