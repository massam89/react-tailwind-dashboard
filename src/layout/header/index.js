import PageTitle from "./PageTitle";
import Profile from "./Profile";
import Search from "./Search";

const Header = () => {

  return (
    <header className="flex justify-between px-6 py-3 bg-white items-center">
      <PageTitle />
      <Search className="w-2/4 relative hidden sm:block" />
      <Profile />
    </header>
  );
};

export default Header;