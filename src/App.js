import Menu from "./layout/menu";
import Header from "./layout/header";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound";
import { useSelector } from "react-redux";
import LoginRegister from "./pages/login-register";
import { dashboardIcon, analyticsIcon } from "./assets/icons/index";
import Analytics from "./pages/analytics";
import Dashboard from "./pages/dashboard";

const menuItems = [
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

function App() {
  const isAuth = useSelector(state => state.auth.isAuth)

  if(isAuth) {
     return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 overflow-x-hidden lg:overflow-hidden">
      <div>
        <Menu />
      </div>
      <main className="sm:col-span-1 md:col-span-3 lg:col-span-4 h-screen bg-gray-100 ">
          <Header/>
          <Routes>
          <Route index element={<Navigate to="/dashboard" />} />
            {menuItems.map((item) => {
              return <Route key={item.id} path={item.path} element={<item.component />} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
    </div>
  );
  } else {
    return (
      <Routes>
        <Route index element={<Navigate to="/login-register" />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="*" element={<Navigate to="/login-register" />} />
      </Routes>
    )
  }
}

export default App;
