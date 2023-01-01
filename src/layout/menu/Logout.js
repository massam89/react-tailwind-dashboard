import { logOutIcon } from "../../assets/icons";

const Logout = () => {
  return (
    <div className="flex px-4 py-2 bottom-5 absolute">
      {logOutIcon("w-6 h-6")}
      <span className="ml-4">Log Out</span>
    </div>
  );
};

export default Logout;
