import { analyticsIcon, dashboardIcon, teamIcon, messageIcon, favoriteIcon, settingIcon } from "../assets/icons";
import Analytics from "../pages/analytics";
import Dashboard from "../pages/dashboard";
import Temp from "../pages/temp"

export const menuItems = [
    {
      id: 1,
      text: "Dashboard",
      icon: dashboardIcon,
      isSelect: false,
      path: "/dashboard",
      component: Dashboard
    },
    {
      id: 2,
      text: "Analytics",
      icon: analyticsIcon,
      isSelect: false,
      path: "/analytics",
      component: Analytics
    },
    {
      id: 3,
      text: "Team",
      icon: teamIcon,
      isSelect: false,
      path: "/team",
      component: Temp
    },
    {
      id: 4,
      text: "Messages",
      icon: messageIcon,
      isSelect: false,
      path: "/messages",
      component: Temp
    },
    {
      id: 5,
      text: "Favorites",
      icon: favoriteIcon,
      isSelect: false,
      path: "/favorites",
      component: Temp
    },
    {
      id: 6,
      text: "Setting",
      icon: settingIcon,
      isSelect: false,
      path: "/setting",
      component: Temp
    },
  ];
  