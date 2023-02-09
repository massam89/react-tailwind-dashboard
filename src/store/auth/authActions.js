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
        
        console.log('expiration', new Date(expirationTime).getMinutes())
        console.log('current', new Date(currentTime).getMinutes())
        
        if(expirationTime < currentTime){
            refreshToken(refToken)
            .then(res => {
                console.log(res);
                console.log(res.data.success);
                if(res.data.success){
                    
                    console.log(localStorage.getItem('jwtToken'))
                    localStorage.setItem('jwtToken', res.data.content.jwtToken)
                    localStorage.setItem('refreshToken', res.data.content.refreshToken)
                    console.log(localStorage.getItem('jwtToken'))
                    console.log('first')
                } else {
                    dispatch(logoutUserRequest())
                    console.log('second')
                }
            })
            .catch(err => {
                toast.warn('you have to check connection or login again!')
                dispatch(logoutUserRequest())
                console.log('third')
            })
        } else {
            if(localStorage.getItem('isAuth')){
              dispatch(authActions.login())  
            } else {
              dispatch(authActions.logout()) 
            }
        }
    }
}