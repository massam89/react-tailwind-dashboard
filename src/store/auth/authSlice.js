import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAuth: localStorage.getItem('isAuth')},
    reducers: {
        login(state){state.isAuth = true},
        logout(state){state.isAuth = false}
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer