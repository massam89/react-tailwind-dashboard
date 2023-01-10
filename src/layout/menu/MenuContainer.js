import MenuItems from "./MenuItems";
import { menuItems } from "../../data/menuItems";

const MenuContainer = () => {

  return (
    <ul className="flex flex-col">
      {menuItems.map((item, index) => (
        <MenuItems key={index} item={item} />
      ))}
    </ul>
  );
};

export default MenuContainer;
