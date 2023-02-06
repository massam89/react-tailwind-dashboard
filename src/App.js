import Menu from "./layout/menu";
import Header from "./layout/header";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginRegister from "./pages/login-register";
import { menuItems } from "./data/menuItems";
import { ToastContainer } from "react-toastify";
import Loader from "./components/loader";
import { useEffect } from "react";
import { checkJwtTokenRequest } from "./store/auth/authActions";

function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  const isLoader = useSelector(state => state.ui.loader)
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('id')) {  
      dispatch(checkJwtTokenRequest())
      navigate(pathname)
    }
  }, [dispatch, pathname, navigate])

  const renderRouters = () => {
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
              <Route path="*" element={<Navigate to="/dashboard" />} />
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

  return (
    <>
      {isLoader && <Loader />}
      <ToastContainer position="bottom-left" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      {renderRouters()}
    </> 
  )
}

export default App;
