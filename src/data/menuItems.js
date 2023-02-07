import { analyticsIcon, dashboardIcon, teamIcon, messageIcon, favoriteIcon, settingIcon } from "../assets/icons";
import Dashboard from "../pages/dashboard";
import Temp from "../pages/temp"

export const menuItems = [
    {
      id: 1,
      text: "Dashboard",
      icon: dashboardIcon,
      path: "/dashboard",
      component: Dashboard
    },
    {
      id: 2,
      text: "Analytics",
      icon: analyticsIcon,
      path: "/analytics",
      component: Temp
    },
    {
      id: 3,
      text: "Team",
      icon: teamIcon,
      path: "/team",
      component: Temp
    },
    {
      id: 4,
      text: "Messages",
      icon: messageIcon,
      path: "/messages",
      component: Temp
    },
    {
      id: 5,
      text: "Favorites",
      icon: favoriteIcon,
      path: "/favorites",
      component: Temp
    },
    {
      id: 6,
      text: "Setting",
      icon: settingIcon,
      path: "/setting",
      component: Temp
    },
  ];
  