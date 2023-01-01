import { logoIcon } from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";

const Logo = () => {
  const showMenu = useSelector((state) => state.ui.showMenu);
  const dispatch = useDispatch();

  return (
    <>
      
      <div className="flex items-center justify-between lg:justify-start py-3 px-4">
        {logoIcon("w-6 h-6")}
        <h2 className="text-xl lg:text-2xl ml-4">CodingLab</h2>
        {showMenu && (
        <span
          onClick={() => dispatch(uiActions.changeMenuDisplay())}
          className="block text-right text-white cursor-pointer lg:hidden"
        >
          X
        </span>
      )}
      </div>
    </>
  );
};

export default Logo;
