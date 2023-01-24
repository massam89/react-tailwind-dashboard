import React, { useState } from "react";
import { eyeIcon, openEyeIcon, passwordIcon, userNameIcon, userIcon } from "../../assets/icons";

const FormInput = React.forwardRef((props, ref) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPasswordHandler = () => setIsPasswordShown(prevState => !prevState)

  const makenewprops = (props) => {
    const newProps = {...props}
    newProps.type = isPasswordShown ? 'text' : newProps.type
    delete newProps.icon
    return newProps
  }

  const getIconFromNameAttribute = (props) => {
    let inputIcon;
    switch(props.name){
      case 'password':
        inputIcon = passwordIcon('h-6 w-6')
        break
      case 'username':
        inputIcon = userNameIcon('h-6 w-6')
        break
      case 'fullname':
        inputIcon = userIcon('h-6 w-6')
        break
      default:
        break
    }
    return inputIcon
  }
  
  return (
    <div className="relative mb-4 w-full">
      <span className="absolute top-0 text-gray-100  xs:text-gray-400">{getIconFromNameAttribute(props)}</span>
      {props.type === 'password' && <span className="absolute top-0 right-0 text-gray-400 cursor-pointer " onMouseDown={() => showPasswordHandler()} onMouseUp={() => showPasswordHandler()} >{isPasswordShown ? openEyeIcon('w-6 h-6') : eyeIcon('w-6 h-6')}</span>}
      {props.type === 'password' ? <input className="pl-8 pb-5 border-b-2 border-gray-200 outline-none mx-auto block text-gray-400 w-full bg-[#13346e] xs:bg-white" {...makenewprops(props)}  /> : <input className="pl-8 pb-5 border-b-2 border-gray-200 outline-none mx-auto block text-gray-400 w-full bg-[#13346e] xs:bg-white" {...makenewprops(props)} /> }
    </div>
  );
});

export default FormInput;
