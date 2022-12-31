import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showMenu: false,
        pageTitle: 'Dashboard'
    },
    reducers: {
        changeMenuDisplay(state){
            state.showMenu = !state.showMenu
        },
        changeTitlePage(state, action){
            state.pageTitle = action.payload
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer