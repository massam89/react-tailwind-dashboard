import { loaderIcon } from "../../assets/icons";

const Loader = () => {
  return (
    <div className="absolute z-[60] h-screen w-screen flex justify-center items-center bg-black opacity-50">
      {loaderIcon("w-24 h-24 text-gray-200 animate-spin dark:text-gray-100 fill-blue-900")}
    </div>
  );
};

export default Loader;
