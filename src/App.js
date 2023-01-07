import Menu from "./layout/menu";
import Header from "./layout/header"
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/analytics";
import NotFound from "./pages/notFound";
import { useSelector } from "react-redux";

function App() {

  const menuItems = useSelector(state => state.menu.menuItems)

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 overflow-x-hidden">
      <div>
        <Menu />
      </div>
      <div className="sm:col-span-1 md:col-span-3 lg:col-span-4 bg-gray-100 h-screen">
        <Header />
        <Routes>
          <Route index element={<Navigate to="/dashboard" />} />
          {menuItems.map(item => {
           return <Route key={item.id} path={item.path} element={<item.component />} />
          }) }
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
