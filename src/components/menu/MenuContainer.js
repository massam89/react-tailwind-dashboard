import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const MenuContainer = () => {
  const menuItems = useSelector(state => state.menu)

  return (
    <ul className="flex flex-col">
      {menuItems.map((item, index) => (
        <MenuItems key={index} item={item} />
      ))}
    </ul>
  );
};

export default MenuContainer;
