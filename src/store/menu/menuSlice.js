import { createSlice } from "@reduxjs/toolkit";
import {menuItems} from "./menuItems";

const menuSlice = createSlice({
    name: 'menu',
    initialState: menuItems,
    reducers: {

    }
})

export const menuActions = menuSlice.actions
export default menuSlice.reducer