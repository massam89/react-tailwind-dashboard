import { toast } from "react-toastify"
import { loginUser, registerUser, revokeToken, refreshToken } from "./_srv"
import { authActions } from "./authSlice"
import { uiActions } from "../ui/uiSlice"
import jwtDecode from "jwt-decode"
import Swal from "sweetalert2"

export const registerUserRequest = (data) => {
    return (dispatch) => {
        registerUser(data)
        .then(res => {
            if(res.data.user){
                dispatch(loginUserRequest(data))
            } else {
                toast.error('Username is not unique')
            }
        })
        .catch(err => toast.error('Something wrong when trying to register new username!'))
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
        Swal.fire({
            title: 'Are you sure to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, do it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const access_token = localStorage.getItem('access_token')
                revokeToken(access_token)
                .then(res => {
                    if(res.data){
                        localStorage.clear()
                        dispatch(uiActions.hideMenuDisplay())
                        dispatch(authActions.logout())  
                    } 
                })
                .catch(err => toast.error('Connection has problem for logging out!')) 
            }
          }) 
    }
}

export const checkTokenValidation = () => {
    return (dispatch) => {   
        const currentTime =  Date.now()
        const expirationTime = +localStorage.getItem('expTime') || currentTime

        if(expirationTime < currentTime){
            localStorage.clear()
            dispatch(uiActions.hideMenuDisplay())
            dispatch(authActions.logout())
            toast.warn('Your token was expired!')
        }
    }
}

export const refreshAccessToken = () => {
    return (dispatch) => {
        const access_token = localStorage.getItem('access_token')
        refreshToken(access_token)
        .then(res => {       
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('expTime', jwtDecode(res.data.access_token).exp * 1000)
            toast.warn('Token has been updated!') 
        })
        .catch(err => {
            localStorage.clear()
            dispatch(uiActions.hideMenuDisplay())
            dispatch(authActions.logout())
            toast.warn('Your token was expired, please login!')
        })
}
}