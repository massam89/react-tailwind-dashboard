import { toast } from "react-toastify"
import { loginUser, registerUser, revokeToken, refreshToken } from "./_srv"
import { authActions } from "./authSlice"
import { uiActions } from "../ui/uiSlice"
import jwtDecode from "jwt-decode"

export const registerUserRequest = (data) => {
    return (dispatch) => {
        registerUser(data)
        .then(res => {
            console.log()
            if(res.data.user){
                dispatch(loginUserRequest(data))
            } else {
                toast.error('Username is not unique')
            }
        })
        .catch(err => toast.error('Something wrong when try to register new username!'))
    }
}

export const loginUserRequest = (data) => {
    return (dispatch) => {
        loginUser(data)
        .then(res => {
            if(res.data.user){
                localStorage.setItem('id', res.data.user.id)
                localStorage.setItem('access_token', res.data.access_token)
                localStorage.setItem('username', res.data.user.username)
                localStorage.setItem('isAuth', true)

                const expirationTime = jwtDecode(localStorage.getItem('access_token')).exp * 1000
                localStorage.setItem('expTime', expirationTime)

                dispatch(authActions.login())
            } else {
                toast.error('something wrong to login after registeration!')
            }
        })
        .catch(err => toast.error('Wrong username or passoword!'))
    }
}

export const logoutUserRequest = () => {
    return (dispatch) => {
        revokeToken(localStorage.getItem('access_token'))
        .then(res => {
            if(res.data){
                localStorage.clear()
                dispatch(uiActions.hideMenuDisplay())
                dispatch(authActions.logout())  
            } 
        })
        .catch(err => toast.error('Connection has problem for logging out!'))  
    }
}

export const checkTokenValidation = () => {
    return (dispatch) => {
        const access_token = localStorage.getItem('access_token')
        const currentTime =  Date.now()
        const expirationTime = +localStorage.getItem('expTime') || currentTime

        console.log(expirationTime - currentTime) 

        if(expirationTime < currentTime){
            refreshToken(access_token)
            .then(res => {
                if(res.data){           
                    localStorage.setItem('access_token', res.data.access_token)
                    localStorage.setItem('expTime', jwtDecode(res.data.access_token).exp * 1000)
                } else {
                    dispatch(logoutUserRequest())
                    toast.error('Token is not valid!')
                }
            })
            .catch(err => {
                toast.warn('you have to check connection or login again!')
                dispatch(logoutUserRequest())
            })
        }
    }
}