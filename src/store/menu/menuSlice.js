import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "./menuItems";

const menuSlice = createSlice({
    name: 'menu',
    initialState: { menuItems: [...menuItems] },
    reducers: {
        changeSpecificMenuItemStyle(state, action) {
           const resetAllMenuSelectToFalse = state.menuItems.map(item => {
            return {...item, isSelect: false}
           })
           resetAllMenuSelectToFalse[+action.payload - 1].isSelect = true
           state.menuItems = resetAllMenuSelectToFalse
        }
    }
})

export const menuActions = menuSlice.actions
export default menuSlice.reducer