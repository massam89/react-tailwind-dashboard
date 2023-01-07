import { NavLink } from "react-router-dom";

const MenuItems = ({item}) => {

  const mutualStyle = 'flex transition-color duration-200 px-4 py-2 text-sm lg:text-lg'
  const notActive = mutualStyle
  const activeStyle = `bg-darkblue ${mutualStyle}`

  return (
    <li>
      <NavLink to={item.path} className={({ isActive }) => isActive ? activeStyle : notActive}>
        {item.icon("w-6 h-6")}
        <button className="ml-4">{item.text}</button>
      </NavLink>
    </li>
  );
};

export default MenuItems;
