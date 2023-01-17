import { createSlice } from "@reduxjs/toolkit";

const checkLoginFromLocalStorage = () => localStorage.getItem('auth') ?? false

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAuth: checkLoginFromLocalStorage},
    reducers: {
        login(state){
            state.isAuth = true
            localStorage.setItem('auth', true)
        },
        logout(state){
            state.isAuth = false
            localStorage.removeItem('auth')
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer