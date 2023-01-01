import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";

const MenuItems = ({item}) => {
  const dispatch = useDispatch()

  return (
    <Link to={`/${item.link}`} onClick={() => dispatch(uiActions.changeTitlePage(item.text))}>
      <li className={`flex ${item.isSelect && 'bg-darkblue'} px-4 py-2 text-sm lg:text-lg`}>
        {item.icon("w-6 h-6")}
        <button className="ml-4">{item.text}</button>  
      </li>
    </Link>
  );
};

export default MenuItems;
