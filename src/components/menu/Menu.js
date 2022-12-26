import { useSelector } from "react-redux";
import Logo from "./Logo";
import Logout from "./Logout";
import MenuContainer from "./MenuContainer";

const Menu = () => {
  const showMenu = useSelector(state => state.ui.showMenu)

  return (
    <nav className={`bg-blues h-screen fixed text-blue-100 lg:w-1/5 lg:block ${showMenu ? 'block' : 'hidden'}`}>
      <Logo />
      <MenuContainer />
      <Logout />  
    </nav>
  );
};

export default Menu;
