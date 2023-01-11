const FormInput = ({iconClassName, type, placeholder, icon}) => {
  return (
    <div className="flex relative mb-4">
      <span className="absolute top-0 text-gray-400">{icon(iconClassName)}</span>
      <input className="pl-8 pb-5 border-b-2 border-gray-200 outline-none w-5/6" type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
