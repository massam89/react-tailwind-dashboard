import { toast } from "react-toastify"
import { loginUser, registerUser, revokeToken, refreshToken } from "./_srv"
import { authActions } from "./authSlice"
import { uiActions } from "../ui/uiSlice"
import jwtDecode from "jwt-decode"

export const registerUserRequest = (data) => {
    return (dispatch) => {
        registerUser(data)
        .then(res => {
            if(res.data.success){
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
            if(res.data.success){

                localStorage.setItem('id', res.data.content.id)
                localStorage.setItem('jwtToken', res.data.content.jwtToken)
                localStorage.setItem('username', res.data.content.userName)
                localStorage.setItem('refreshToken', res.data.content.refreshToken)
                localStorage.setItem('isAuth', true)

                const expirationTime = jwtDecode(localStorage.getItem('jwtToken')).exp * 1000
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
        revokeToken(localStorage.getItem('refreshToken'))
        .then(res => {
            if(res.data.success){
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
        const currentTime =  Date.now()
        const refToken = localStorage.getItem('refreshToken') 
        const expirationTime = +localStorage.getItem('expTime') || currentTime

        console.log((expirationTime - currentTime) / 3600)

        if(expirationTime < currentTime){
            refreshToken(refToken)
            .then(res => {
                if(res.data.success){           
                    localStorage.setItem('jwtToken', res.data.content.jwtToken)
                    localStorage.setItem('refreshToken', res.data.content.refreshToken)
                    localStorage.setItem('expTime', jwtDecode(res.data.content.jwtToken).exp * 1000)
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