import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authActions } from "../../store/auth/authSlice"

const Login = () => {
  const disptach = useDispatch()
  const navigate = useNavigate()
  const loginHandler = () => {
    disptach(authActions.login())
    navigate('/')
  }
  
  return (
    <div onClick={loginHandler} className="w-full h-full bg-red-200">Login page </div>
  )
}

export default Login