import { dashboardIcon, analyticsIcon, teamIcon, messageIcon, favoriteIcon, settingIcon } from "../../assets/icons";
import Analytics from "../../pages/analytics";
import Dashboard from "../../pages/dashboard";

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
  // {
  //   id: 3,
  //   text: "Team",
  //   icon: teamIcon,
  //   isSelect: false,
  //   path: "/team",
  // },
  // {
  //   id: 4,
  //   text: "Messages",
  //   icon: messageIcon,
  //   isSelect: false,
  //   path: "/messages",
  // },
  // {
  //   id: 5,
  //   text: "Favorites",
  //   icon: favoriteIcon,
  //   isSelect: false,
  //   path: "/favorites",
  // },
  // {
  //   id: 6,
  //   text: "Setting",
  //   icon: settingIcon,
  //   isSelect: false,
  //   path: "/setting",
  // },
];
