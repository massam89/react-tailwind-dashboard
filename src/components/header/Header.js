const Header = () => {
  return (
    <header className="flex justify-between px-2 py-3 bg-white">
      <div className="flex items-center">
        <svg className="w-7 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        <h2 className="font-bold text-2xl pl-2 tracking-wide text-gray-800">Dashboard</h2>
      </div>
   
      <form className="w-2/5 relative">
        <input className="outline-1 outline-gray-400 w-full mt-1 py-1 bg-gray-200 border-solid border-gray-300 border-2 pl-4 rounded-md" type="text" placeholder="Search" />
        <button className="rounded-md p-1 inline-block absolute right-1 top-2 bg-blue-500 text-white" type="submit">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </form>

      <div className=" cursor-pointer pr-4 flex items-center border-gray-300 border-2 bg-gray-200 rounded-md">
        <img className="rounded w-6 m-1" src="/images/profile-pic.jpg" alt="profile-pic" />
        <span className="font-semibold mx-2 text-sm">Prem Shahi</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </header>
  );
};

export default Header;
