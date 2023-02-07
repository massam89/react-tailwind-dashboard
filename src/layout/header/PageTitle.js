import { menuIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice"
import { useLocation } from "react-router-dom";
import removeSlashAndCapitalizeFirstLetter from "../../utils/removeSlashAndCapitalizeFirstLetter";

const PageTitle = () => {
  
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  const preparedPathname = removeSlashAndCapitalizeFirstLetter(pathname)

  const hideMenuHandler = () => dispatch(uiActions.changeMenuDisplay())
  
  return (
    <div className="flex items-center">
      <div onClick={hideMenuHandler}>
        {menuIcon('w-7 lg:hidden cursor-pointer pt-1')}
      </div>
      <h2 className="font-bold lg:text-2xl md:text-xl pl-2 tracking-wide text-gray-800">{preparedPathname}</h2>
    </div>
  )
}

export default PageTitle