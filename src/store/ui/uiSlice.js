import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {showMenu: false},
    reducers: {
        changeMenuDisplay(state){
            state.showMenu = !state.showMenu
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer