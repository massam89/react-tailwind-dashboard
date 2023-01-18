import FormInput from "../../components/formInput"
import { arrowLeftIcon, passwordIcon, userIcon, userNameIcon } from "../../assets/icons"
import { useDispatch } from "react-redux"
import { uiActions } from "../../store/ui/uiSlice"
import { useState } from "react"

const Register = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const disptach = useDispatch()

  const linkToLoginPageHandler = () => disptach(uiActions.changeLoginMode())
  const showPasswordHandler = () => setIsPasswordShown(prevState => !prevState)
  
  return (
    <div className="h-full w-full flex justify-center items-center bg-white">
      <div className="w-3/4">
        <h2 className="text-gray-500 font-bold text-3xl mb-12">Get Started</h2>
        <form>
          <div>
            <FormInput type='text' placeholder='Fullname' icon={userIcon} iconClassName='w-6 h-6' />
            <FormInput type='text' placeholder='Username' icon={userNameIcon} iconClassName='w-6 h-6' />
            <FormInput type={`${isPasswordShown ? 'text' : 'password'}`} name='password' showPasswordHandler={showPasswordHandler} placeholder='Password' icon={passwordIcon} iconClassName='w-6 h-6' />          
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