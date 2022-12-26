import { useSelector } from "react-redux";
import { logOutIcon } from "../../assets/icon";
import Logo from "./Logo";
import MenuContainer from "./MenuContainer";

const Menu = () => {
  const showMenu = useSelector(state => state.ui.showMenu)

  return (
    <nav className={`bg-blues h-screen fixed text-blue-100 lg:w-1/5 lg:block ${showMenu ? 'block' : 'hidden'}`}>
      <Logo />
      <MenuContainer />

      <div className="flex px-4 py-2 bottom-5 absolute">
        {logOutIcon('w-6 h-6')}
        <span className="ml-4">Log Out</span>
      </div>
    </nav>
  );
};

export default Menu;
