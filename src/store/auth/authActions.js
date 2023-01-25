import { toast } from "react-toastify"
import { loginUser, registerUser } from "./_srv"

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
        .catch(err => toast.error('Something wrong!'))
    }
}

export const loginUserRequest = (data) => {
    return (dispatch) => {
        loginUser(data)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
}

