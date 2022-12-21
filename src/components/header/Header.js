const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex items-center">
        <img className="w-6 cursor-pointer" src="/icons/menu.svg" alt="menu" />
        <h2>Dashboard</h2>
      </div>
      <div className="flex items-center">
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img className="w-5" src="/icons/search.svg" alt="search" />
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <img className="rounded w-10" src="/images/profile-pic.jpg" alt="profile-pic" />
        <span>Prem Shahi</span>
        <img src="/icons/arrow-down-2.svg" alt="arrow-down" />
      </div>
    </header>
  );
};

export default Header;
