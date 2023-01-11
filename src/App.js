import Menu from "./layout/menu";
import Header from "./layout/header";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./pages/notFound";
import { useDispatch, useSelector } from "react-redux";
import LoginRegister from "./pages/login-register";
import { useCallback, useEffect } from "react";
import { authActions } from "./store/auth/authSlice";
import { menuItems } from "./data/menuItems";

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const localStorageCheck = useCallback(() => {
    if(localStorage.getItem('auth')){
      dispatch(authActions.login())
      navigate(pathname)
    }
  }, [dispatch, navigate, pathname])

  useEffect(() => {
    localStorageCheck()
  }, [localStorageCheck])

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
            <Route path="*" element={<NotFound/>} />
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
