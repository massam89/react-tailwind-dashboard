import { useDispatch, useSelector } from "react-redux"
import { arrowRightIcon } from "../../assets/icons"
import FormInput from "../../components/formInput"
import { uiActions } from "../../store/ui/uiSlice"
import { loginUserRequest } from "../../store/auth/authActions"
import { toast } from "react-toastify"
import useUsernameValidation from "../../hooks/useUsernameValidation"

const Login = () => {
  const [username, setUsernameHandler] = useUsernameValidation()
  const dispatch = useDispatch()

  const sumbitHandler = (e) => {
    e.preventDefault()

    const usernameInputValue = e.target[0].value
    const passwordInputValue = e.target[1].value
    
    if(usernameInputValue && passwordInputValue){
      dispatch(loginUserRequest({userName: usernameInputValue, password: passwordInputValue}))
    }else{
      toast.error('Fill all inputs!')
    }
  }
  
  const linkToRegisterPageHandler = () => dispatch(uiActions.changeLoginMode())
  const isLoginMode = useSelector(state => state.ui.loginMode)
  
  return (
    <div className={`bg-[#1c4c9f] xs:bg-white h-full w-full xs:w-1/2 absolute ${isLoginMode ? 'right-0 xs:right-[50%] opacity-100 z-10' : 'xs:right-0 right-[-50%] opacity-0 -z-10'} transition-all duration-1000 flex justify-center items-center`}>
      <div className="w-3/4">
        <h2 className="text-gray-200 xs:text-gray-500 font-bold text-2xl md:text-3xl mb-12">Login To Dashboard</h2>
        <form onSubmit={sumbitHandler}>
          <div>
            <FormInput type='text' name='username' placeholder='Username' autoComplete='off' value={username} onChange={setUsernameHandler}/>
            <FormInput type='password' name='password' placeholder='Password' />
          </div>
          <div className="flex flex-col md:flex-row justify-end md:justify-between items-center md:items-center mt-8 md:mt-14">
            <button type="submit" className="bg-teal-300 rounded-full px-8 py-1 lg:px-12 lg:py-2 text-white text hover:shadow-md order-0 md:order-1">Login</button>
            <span onClick={linkToRegisterPageHandler} className="text-gray-200 xs:text-gray-400 cursor-pointertext-gray-400 mt-3 md:mt-0 text-sm lg:text-lg cursor-pointer order-1 md:order-0">Switch To Register Page{arrowRightIcon('h-4 h-4 inline ml-1')}</span>
          </div>
        </form>
      </div>  
    </div>
  )
}

export default Login