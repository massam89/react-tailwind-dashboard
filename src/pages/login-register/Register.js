import FormInput from "../../components/formInput"
import { arrowLeftIcon, stopIcon, tickIcon} from "../../assets/icons"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui/uiSlice"
import { checkUniqueUser } from "./_srv"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

let initialLoad = true

const Register = () => {
  const [username, setUsername] = useState('')
  const [isUsernameValid, setIsUsernameValid] = useState(false)
  const disptach = useDispatch()

  const linkToLoginPageHandler = () => disptach(uiActions.changeLoginMode())

  const isLoginMode = useSelector(state => state.ui.loginMode)

  useEffect(() => {
    if(!initialLoad){
      
      const timer = setTimeout(() => {
        checkUniqueUser({userName : username})
        .then(res => {
          if(res.data === true){
            setIsUsernameValid(true)
          } else {
            setIsUsernameValid(false)
          }
        })
        .catch(err => toast.error('something wrong'))
      }, 1000);
      return () => clearTimeout(timer)
    }
    
    initialLoad = false
  }, [username])

  const registerHandler = (e) => {
    e.preventDefault() 
    
  }
  
  return (
    <div className={`bg-[#13346e] xs:bg-white h-full w-full xs:w-1/2 absolute ${isLoginMode ? 'xs:left-0 left-[-50%] opacity-0' : 'left-0 xs:left-[50%] opacity-100'} transition-all duration-1000 flex justify-center items-center`}>
      <div className="w-3/4">
        <h2 className="text-gray-200 xs:text-gray-500 font-bold text-3xl mb-12">Get Started</h2>
        <form onSubmit={registerHandler}>
          <div className="relative">
            {!isUsernameValid ? tickIcon('w-7 h-7 absolute right-0 z-20 text-green-500') : stopIcon('w-7 h-7 absolute right-0 z-20 text-red-500')}
            <FormInput type='text' placeholder='Username' name='username' onChange={(e) => setUsername(e.target.value)} />
            <FormInput type='password' placeholder='Password' name='password' />          
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