import Menu from "./layout/menu";
import Header from "./layout/header";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginRegister from "./pages/login-register";
import { menuItems } from "./data/menuItems";
import { ToastContainer } from "react-toastify";
import Loader from "./components/loader";
import { useEffect } from "react";
import { checkTokenValidation, refreshAccessToken} from "./store/auth/authActions";

function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  const isLoader = useSelector(state => state.ui.loader)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkTokenValidation())
    setInterval(() => {
      dispatch(refreshAccessToken())
  }, 300000);
  },[dispatch])

  const routesWithAuth = () => {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-5 overflow-x-hidden lg:overflow-hidden">
       <div>
         <Menu />
       </div>
       <main className="sm:col-span-1 md:col-span-3 lg:col-span-4 h-screen bg-gray-100 ">
           <Header/>
           <Routes>
            <Route index element={<Navigate to="/dashboard" />} />
            {menuItems.map((item) => <Route key={item.id} path={item.path} element={<item.component />} />)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
           </Routes>
       </main>
      </div>
    )
  }

  const routesWithoutAuth = () => {
    return (
      <Routes>
        <Route index element={<Navigate to="/login-register" />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="*" element={<Navigate to="/login-register" />} />
      </Routes>
    )
  }

  const renderRoutes = () => isAuth ? routesWithAuth() : routesWithoutAuth()

  return (
    <>
      {isLoader && <Loader />}
      <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      {renderRoutes()}
    </> 
  )
}

export default App;
