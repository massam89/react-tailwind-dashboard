import { logoIcon } from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";

const Logo = () => {
  const showMenu = useSelector((state) => state.ui.showMenu);
  const dispatch = useDispatch();

  return (
    <>
      {showMenu && (
        <span
          onClick={() => dispatch(uiActions.changeMenuDisplay())}
          className="block text-right px-5 mt-2 text-white cursor-pointer"
        >
          X
        </span>
      )}
      <div className="flex items-center py-3 px-4">
        {logoIcon("w-6 h-6")}
        <h2 className="text-md lg:text-2xl ml-4">CodingLab</h2>
      </div>
    </>
  );
};

export default Logo;
