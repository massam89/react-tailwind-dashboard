import FormInput from "../../components/formInput"
import { arrowLeftIcon} from "../../assets/icons"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui/uiSlice"


const Register = () => {
  const disptach = useDispatch()

  const linkToLoginPageHandler = () => disptach(uiActions.changeLoginMode())

  const isLoginMode = useSelector(state => state.ui.loginMode)
  
  return (
    <div className={`h-full w-1/2 absolute ${isLoginMode ? 'left-0 opacity-0' : 'left-[50%] opacity-100'} transition-all duration-1000 flex justify-center items-center bg-white`}>
      <div className="w-3/4">
        <h2 className="text-gray-500 font-bold text-3xl mb-12">Get Started</h2>
        <form>
          <div>
            <FormInput type='text' placeholder='Fullname' name='fullname' />
            <FormInput type='text' placeholder='Username' name='username'  />
            <FormInput type='password' placeholder='Password' name='password' />          
          </div>
          <div className="flex justify-between items-center mt-14">
            <span onClick={linkToLoginPageHandler} className="text-gray-400 cursor-pointer">{arrowLeftIcon('h-4 h-4 inline mr-1')}Link To Login Page</span>
            <button type="submit" className="bg-teal-300 rounded-full px-12 py-2 text-white text hover:shadow-md">Register</button>
          </div>
        </form>
      </div>  
    </div>
  )
}

export default Register