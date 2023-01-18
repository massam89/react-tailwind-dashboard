import { useState } from "react";
import { eyeIcon, openEyeIcon } from "../../assets/icons";

const FormInput = ({ name, type, placeholder, icon}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPasswordHandler = () => setIsPasswordShown(prevState => !prevState)

  return (
    <div className="relative mb-4 w-full">
      <span className="absolute top-0 text-gray-400">{icon('w-6 h-6')}</span>
      {type === 'password' && <span onMouseDown={() => showPasswordHandler()} onMouseUp={() => showPasswordHandler()} className="absolute top-0 right-0 text-gray-400 cursor-pointer">{isPasswordShown ? eyeIcon('w-6 h-6') : openEyeIcon('w-6 h-6')}</span>}
      
      {type === 'password' ?
      <input className="pl-8 pb-5 border-b-2 border-gray-200 outline-none mx-auto block text-gray-400 w-full" type={isPasswordShown ? 'text' : 'password'} placeholder={placeholder} />
      :
      <input className="pl-8 pb-5 border-b-2 border-gray-200 outline-none mx-auto block text-gray-400 w-full" type={type} placeholder={placeholder} /> 
      }
    </div>
  );
};

export default FormInput;
