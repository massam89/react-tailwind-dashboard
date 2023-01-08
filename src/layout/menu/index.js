import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import Logout from "./Logout";
import MenuContainer from "./MenuContainer";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { uiActions } from "../../store/ui/uiSlice";

const Menu = () => {
  const showMenu = useSelector(state => state.ui.showMenu)
  const disptach = useDispatch()
  const menuRef = useRef()

  const hideMenu = () => {
    disptach(uiActions.hideMenuDisplay())
  }

  useOutsideAlerter(menuRef, hideMenu)

  return (
    <>
    <nav className={`bg-blues h-screen fixed text-blue-100 w-52 sm:w-56 z-10 lg:w-1/5 hidden lg:block`}>
      <Logo />
      <MenuContainer />
      <Logout />  
    </nav>
    <nav ref={menuRef} className={`bg-blues h-screen fixed transition-all duration-500  text-blue-100 w-52 sm:w-56 z-10 lg:w-1/5 ${showMenu ? 'left-0' : '-left-60 '} `}>
      <Logo />
      <MenuContainer />
      <Logout />  
    </nav>
    </>
    
  );
};

export default Menu;
