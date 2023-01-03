import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "./menuItems";

const menuSlice = createSlice({
  name: "menu",
  initialState: { menuItems: [...menuItems] },
  reducers: {
    changeSpecificMenuItemStyle(state, action) {
      const resetAllMenuSelectToFalse = state.menuItems.map((item) => {
        return { ...item, isSelect: false };
      });
      resetAllMenuSelectToFalse[+action.payload - 1].isSelect = true;
      state.menuItems = resetAllMenuSelectToFalse;
    },
    changeMenuSelectionAtFirstTime(state, action) {
      const specificIndex = state.menuItems.findIndex(
        (item) => item.link === action.payload
      );
      state.menuItems[specificIndex].isSelect = true;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
