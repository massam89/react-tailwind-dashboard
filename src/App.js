import Menu from "./layout/menu";
import Header from "./layout/header";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound";
import { useSelector } from "react-redux";

function App() {
  const menuItems = useSelector((state) => state.menu.menuItems);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 overflow-x-hidden lg:overflow-hidden">
      <div>
        <Menu />
      </div>
      <main className="sm:col-span-1 md:col-span-3 lg:col-span-4 h-screen bg-gray-100 ">
          <Header/>
          <Routes>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<NotFound />} />
            {menuItems.map((item) => {
              return <Route key={item.id} path={item.path} element={<item.component />} />;
            })}
          </Routes>
      </main>
    </div>
  );
}

export default App;
