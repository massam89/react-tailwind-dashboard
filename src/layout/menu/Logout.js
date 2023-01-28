import { useDispatch } from "react-redux";
import { logOutIcon } from "../../assets/icons";
import { logoutUserRequest } from "../../store/auth/authActions";


const Logout = () => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutUserRequest())
  }

  return (
    <div onClick={logoutHandler} className="flex px-4 py-2 bottom-5 absolute cursor-pointer">
      {logOutIcon("w-6 h-6")}
      <span className="ml-4">Log Out</span>
    </div>
  );
};

export default Logout;
