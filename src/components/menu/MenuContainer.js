import MenuItems from "./MenuItems";
import { dashboardIcon, analyticsIcon, teamIcon, messageIcon, favoriteIcon, settingIcon } from "../../assets/icons";

const MenuContainer = () => {
  const menuItems = [
    {
      text: "Dashboard",
      icon: dashboardIcon,
      isSelect: true,
      link: '/dashboard'
    },
    {
      text: "Analytics",
      icon: analyticsIcon,
      isSelect: false,
      link: '/analytics'
    },
    {
      text: "Team",
      icon: teamIcon,
      isSelect: false,
    },
    {
      text: "Messages",
      icon: messageIcon,
      isSelect: false,
    },
    {
      text: "Favorites",
      icon: favoriteIcon,
      isSelect: false,
    },
    {
      text: "Setting",
      icon: settingIcon,
      isSelect: false,
    },
  ];
  
  return (
    <ul className="flex flex-col">
      {menuItems.map((item, index) => (
        <MenuItems key={index} item={item} />
      ))}
    </ul>
  );
};

export default MenuContainer;