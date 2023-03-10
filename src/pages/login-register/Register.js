import FormInput from "../../components/formInput"
import { arrowLeftIcon, loaderIcon, stopIcon, tickIcon} from "../../assets/icons"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui/uiSlice"
import { checkUniqueUser } from "./_srv"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { registerUserRequest } from "../../store/auth/authActions"
import useUsernameValidation from "../../hooks/useUsernameValidation"

let initialLoad = true

const Register = () => {
  const [username, setUsernameHandler] = useUsernameValidation()
  const [isUsernameValid, setIsUsernameValid] = useState(false)
  const [isLoadingCheckUsername, setIsLoadingCheckUsername] = useState(false)
  const dispatch = useDispatch()

  const linkToLoginPageHandler = () => dispatch(uiActions.changeLoginMode())
  const isLoginMode = useSelector(state => state.ui.loginMode)
  
  useEffect(() => {
    if(!initialLoad && username){
      setIsLoadingCheckUsername(true)
      const timer = setTimeout(() => {
        checkUniqueUser({username : username})
        .then(res => {
          setIsLoadingCheckUsername(false)
          if(res.data === true){
            setIsUsernameValid(false)
          } else {
            setIsUsernameValid(true)
          }
        })
        .catch(err => {
          setIsUsernameValid(false)
          setIsLoadingCheckUsername(false)
          toast.error('something wrong, Check connection!')
        })
      }, 1000);
      return () => clearTimeout(timer)
    } else {
      setIsLoadingCheckUsername(false)
    }
  }, [username])

  const changeUsernameHandler = (e) => {
    setUsernameHandler(e)
    initialLoad = false
  }

  const registerFormHandler = (e) => {
    e.preventDefault()

    const nameInputValue = e.target[0].value
    const usernameInputValue = e.target[1].value
    const passwordInputValue = e.target[2].value
    const passwordConfirmationInputValue = e.target[3].value

    if(isUsernameValid && usernameInputValue && passwordInputValue && passwordConfirmationInputValue && nameInputValue && passwordInputValue === passwordConfirmationInputValue){
        dispatch(registerUserRequest({username: usernameInputValue, password: passwordInputValue, password_confirmation:passwordConfirmationInputValue, name: nameInputValue}))
      } else {
        toast.error('Choose unique username and fill all inputs or maybe your password inputs are not the same !')
      }
  }

  const usernameValidationIcon = (isUsernameValid) => {
    if(isLoadingCheckUsername){
      return loaderIcon('w-6 h-6 absolute right-0 z-20 text-gray-200 animate-spin dark:text-gray-100 fill-blue-700')
    } else {
      if(username.trim() === '') {
        return null     
      } else {
        return isUsernameValid ? tickIcon('w-7 h-7 absolute right-0 z-20 text-green-500') : stopIcon('w-7 h-7 absolute right-0 z-20 text-red-500')
      }
    }
 }

  return (
    <div className={`bg-[#1c4c9f] xs:bg-white h-full w-full xs:w-1/2 absolute ${isLoginMode ? 'xs:left-0 left-[-50%] opacity-0' : 'left-0 xs:left-[50%] opacity-100'} transition-all duration-1000 flex justify-center items-center`}>
      <div className="w-3/4">
        <h2 className="text-gray-200 xs:text-gray-500 font-bold text-3xl mb-12">Get Started</h2>
        <form onSubmit={registerFormHandler}>
          <div className="relative">
            <FormInput type='text' name='name' placeholder='Name' autoComplete='off'/>
            {usernameValidationIcon(isUsernameValid)}
            <FormInput type='text' placeholder='Username' name='username' autoComplete='off' value={username} onChange={changeUsernameHandler} />
            <FormInput type='password' placeholder='Password' name='password' />          
            <FormInput type='password' placeholder='Confirm Password' name='password_confirmation' />          
          </div>
          <div className="flex flex-col md:flex-row justify-end md:justify-between items-center md:items-center mt-8 md:mt-14">
            <span onClick={linkToLoginPageHandler} className="text-gray-200 xs:text-gray-400 mt-3 md:mt-0 text-sm lg:text-lg cursor-pointer order-2 md:order-1">{arrowLeftIcon('h-4 h-4 inline mr-1')}Switch To Login Page</span>
            <button type="submit" className="bg-teal-300 rounded-full px-8 py-1 lg:px-12 lg:py-2 text-white text hover:shadow-md order-1 md:order-2">Register</button>
          </div>
        </form>
      </div>  
    </div>
  )
}

export default Register