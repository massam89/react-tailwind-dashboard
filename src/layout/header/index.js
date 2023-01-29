import PageTitle from "./PageTitle";
import Profile from "./Profile";
import Search from "./Search";

const Header = () => {

  return (
    <header className="flex justify-between px-6 py-3 items-center bg-white">
      <PageTitle />
      <Search />
      <Profile />
    </header>
  );
};

export default Header;
