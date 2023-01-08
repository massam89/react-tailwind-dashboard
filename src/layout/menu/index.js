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
    <nav ref={menuRef} className={`bg-blues h-screen fixed text-blue-100 w-52 sm:w-56 z-10 lg:w-1/5 lg:block ${showMenu ? 'block' : 'hidden'}`}>
      <Logo />
      <MenuContainer />
      <Logout />  
    </nav>
  );
};

export default Menu;
