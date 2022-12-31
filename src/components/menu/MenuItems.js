import { Link } from "react-router-dom";

const MenuItems = ({item}) => {
  return (
    <li className={`flex ${item.isSelect && 'bg-darkblue'} px-4 py-2 text-sm lg:text-lg`}>
      {item.icon("w-6 h-6")}
      <Link to={`/${item.link}`}>
        <button className="ml-4">{item.text}</button>
      </Link>
      
    </li>
  );
};

export default MenuItems;
