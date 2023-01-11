import FormInput from "../../components/formInput"
import { passwordIcon, userIcon, userNameIcon } from "../../assets/icons"
const Register = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <FormInput type='text' placeholder='Fullname' icon={userIcon} iconClassName='w-6 h-6' />
        <FormInput type='text' placeholder='Username' icon={userNameIcon} iconClassName='w-6 h-6' />
        <FormInput type='password' placeholder='Password' icon={passwordIcon} iconClassName='w-6 h-6' />
      </div>
      
    </div>
  )
}

export default Register