import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showMenu: false,
        loginMode: false
    },
    reducers: {
        changeMenuDisplay(state){state.showMenu = !state.showMenu},
        hideMenuDisplay(state){state.showMenu = false},
        changeLoginMode(state){state.loginMode = !state.loginMode}
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer