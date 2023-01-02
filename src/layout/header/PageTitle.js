import { menuIcon } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice"
import { useMemo } from "react";
import { getUrlParameter } from "../../utils/getUrlParameter";

const PageTitle = () => {

  const dispatch = useDispatch()
  const menuItems = useSelector(state => state.menu.menuItems)  
  const selectedItem = useMemo(() => menuItems.find(item => item.link === getUrlParameter()) , [menuItems] ) 
  
  return (
    <div className="flex items-center">
        <div onClick={() => dispatch(uiActions.changeMenuDisplay()) }>
          {menuIcon('w-7 lg:hidden cursor-pointer pt-1')}
        </div>
        <h2 className="font-bold lg:text-2xl md:text-xl pl-2 tracking-wide text-gray-800">{selectedItem.text}</h2>
      </div>
  )
}

export default PageTitle