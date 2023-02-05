import { toast } from "react-toastify"
import { loginUser, registerUser } from "./_srv"
import { authActions } from "./authSlice"
import { uiActions } from "../ui/uiSlice"

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
                localStorage.setItem('userName', res.data.content.userName)
                localStorage.setItem('isAuth', true)
                dispatch(authActions.login())
            } else {
                toast.error('something wrong to login after registeration!')
            }
        })
        .catch(err => toast.error('Wrong username or passoword!'))
    }
}

export const logoutUserRequest = (data) => {
    return (dispatch) => {
        localStorage.clear()
        dispatch(uiActions.hideMenuDisplay())
        dispatch(authActions.logout())
    }
}

