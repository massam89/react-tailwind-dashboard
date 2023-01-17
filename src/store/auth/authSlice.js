import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAuth: localStorage.getItem('auth') ? true : false},
    reducers: {
        login(state){
            state.isAuth = true
            localStorage.setItem('auth', true)
        },
        logout(state){
            state.isAuth = false
            localStorage.clear()
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer