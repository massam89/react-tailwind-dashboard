import { menuIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice"
import { useLocation } from "react-router-dom";

const PageTitle = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const preparedPathname = (location.pathname.replace(/^\/+/i, '')).charAt(0).toUpperCase() + (location.pathname.replace(/^\/+/i, '')).slice(1);
  
  
  return (
    <div className="flex items-center">
        <div onClick={() => dispatch(uiActions.changeMenuDisplay()) }>
          {menuIcon('w-7 lg:hidden cursor-pointer pt-1')}
        </div>
        <h2 className="font-bold lg:text-2xl md:text-xl pl-2 tracking-wide text-gray-800">{preparedPathname}</h2>
      </div>
  )
}

export default PageTitle