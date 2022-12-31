import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 overflow-x-hidden">
      <div>
        <Menu />
      </div>
      <div className="sm:col-span-1 md:col-span-3 lg:col-span-4 bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
