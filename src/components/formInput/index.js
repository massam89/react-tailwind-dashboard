const FormInput = ({iconClassName, type, placeholder, icon}) => {
  return (
    <div className="relative mb-4 w-full">
      <span className="absolute top-0 text-gray-400">{icon(iconClassName)}</span>
      <input className="pl-8 pb-5 border-b-2 border-gray-200 outline-none mx-auto block w-full" type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
