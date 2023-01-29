import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";

const MenuItems = ({item}) => {
  const dispatch = useDispatch()

  const mutualStyle = 'flex transition-color duration-200 px-4 py-2 text-sm lg:text-lg'
  const notActive = mutualStyle
  const activeStyle = `bg-darkblue ${mutualStyle}`

  const hideMenuOnClickLinks = () => dispatch(uiActions.hideMenuDisplay())

  return (
    <li>
      <NavLink onClick={hideMenuOnClickLinks} to={item.path} className={({ isActive }) => isActive ? activeStyle : notActive}>
        {item.icon("w-6 h-6")}
        <button className="ml-4">{item.text}</button>
      </NavLink>
    </li>
  );
};

export default MenuItems;
