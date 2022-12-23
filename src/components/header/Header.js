const Header = () => {
  return (
    <header className="flex justify-between p-2">
      <div className="flex items-center">
        <svg className="w-7 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        <h2 className="font-bold text-2xl pl-2 tracking-wide text-gray-800">Dashboard</h2>
      </div>
      <div className="relative w-2/5 border-solid border-gray-300 border-2 bg-gray-200 pl-4 rounded-md">
        <form>
          <input className=" placeholder-black w-full mt-1 py-1 bg-gray-200" type="text" placeholder="Search" />
          <button className="inline-block absolute right-2 top-2" type="submit">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <img className="rounded w-10" src="/images/profile-pic.jpg" alt="profile-pic" />
        <span>Prem Shahi</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </header>
  );
};

export default Header;
