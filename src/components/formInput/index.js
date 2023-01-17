import { eyeIcon, openEyeIcon } from "../../assets/icons";

const FormInput = ({iconClassName,name, type, placeholder, icon, showPasswordHandler}) => {

  return (
    <div className="relative mb-4 w-full">
      <span className="absolute top-0 text-gray-400">{icon(iconClassName)}</span>
      {name === 'password' && <span onMouseDown={() => showPasswordHandler()} onMouseUp={() => showPasswordHandler()} className="absolute top-0 right-0 text-gray-400 cursor-pointer">{type === 'password' ? eyeIcon('w-6 h-6') : openEyeIcon('w-6 h-6')}</span>}
      <input className="pl-8 pb-5 border-b-2 border-gray-200 outline-none mx-auto block text-gray-400 w-full" type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
