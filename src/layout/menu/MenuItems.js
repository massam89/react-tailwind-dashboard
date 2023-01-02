import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuActions } from "../../store/menu/menuSlice";
import { useEffect } from "react";
import { getUrlParameter } from "../../utils/getUrlParameter";

const MenuItems = ({item}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(menuActions.changeMenuSelectionAtFirstTime(getUrlParameter()))
    
  }, [dispatch])

  const menuItemsSelectHandler = () => {
    dispatch(menuActions.changeSpecificMenuItemStyle(item.id))
  }

  return (
    <Link to={`/${item.link}`} onClick={menuItemsSelectHandler}>
      <li className={`flex ${item.isSelect && 'bg-darkblue'} transition-color duration-200 px-4 py-2 text-sm lg:text-lg`}>
        {item.icon("w-6 h-6")}
        <button className="ml-4">{item.text}</button>  
      </li>
    </Link>
  );
};

export default MenuItems;
