import PageTitle from "./PageTitle";
import Profile from "./Profile";
import Search from "../../components/search";

const Header = () => {

  return (
    <header className="flex justify-between px-6 py-3 items-center bg-white">
      <PageTitle />
      <Search className='w-2/4 relative hidden sm:block' />
      <Profile />
    </header>
  );
};

export default Header;
