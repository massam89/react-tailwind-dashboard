import { useDispatch } from "react-redux"
import { authActions } from "../../store/auth/authSlice"
import { arrowRightIcon } from "../../assets/icons"
import FormInput from "../../components/formInput"
import { uiActions } from "../../store/ui/uiSlice"

const Login = () => {

  const disptach = useDispatch()

  const sumbitHandler = () => disptach(authActions.login())
  const linkToRegisterPageHandler = () => disptach(uiActions.changeLoginMode())
  
  return (
    <div className="h-full w-full flex justify-center items-center bg-white">
      <div className="w-3/4">
        <h2 className="text-gray-500 font-bold text-3xl mb-12">Login To Dashboard</h2>
        <form onSubmit={sumbitHandler}>
          <div>
            <FormInput type='text' name='username' placeholder='Username'/>
            <FormInput type='password' name='password' placeholder='Password' />
          </div>
          <div className="flex justify-between items-center mt-14">
            <button type="submit" className="bg-teal-300 rounded-full px-12 py-2 text-white text hover:shadow-md">Login</button>
            <span onClick={linkToRegisterPageHandler} className="text-gray-400 cursor-pointer">Link To Register Page{arrowRightIcon('h-4 h-4 inline ml-1')}</span>
          </div>
        </form>
      </div>  
    </div>
  )
}

export default Login