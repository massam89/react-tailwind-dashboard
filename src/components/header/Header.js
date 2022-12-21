const Header = () => {
  return (
    <header>
      <div>
        <img className="w-8" src="/icons/menu.svg" alt="menu" />
        <h2>Dashboard</h2>
      </div>
      <div>
        <form>
          <input type="text" />
          <button type="submit">
            <img className="w-8" src="/icons/search.svg" alt="search" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
