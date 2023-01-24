import FormInput from "../../components/formInput"
import { arrowLeftIcon} from "../../assets/icons"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui/uiSlice"


const Register = () => {
  const disptach = useDispatch()

  const linkToLoginPageHandler = () => disptach(uiActions.changeLoginMode())

  const isLoginMode = useSelector(state => state.ui.loginMode)
  
  return (
    <div className={`bg-[#13346e] xs:bg-white h-full w-full xs:w-1/2 absolute ${isLoginMode ? 'xs:left-0 left-[-50%] opacity-0' : 'left-0 xs:left-[50%] opacity-100'} transition-all duration-1000 flex justify-center items-center`}>
      <div className="w-3/4">
        <h2 className="text-gray-200 xs:text-gray-500 font-bold text-3xl mb-12">Get Started</h2>
        <form>
          <div>
            <FormInput type='text' placeholder='Fullname' name='fullname' />
            <FormInput type='text' placeholder='Username' name='username'  />
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