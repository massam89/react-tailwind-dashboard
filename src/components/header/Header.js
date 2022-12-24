import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <header className="flex justify-between px-6 py-3 bg-white">
      <div className="flex items-center">
        <svg className="w-7 cursor-pointer pt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        <h2 className="font-bold lg:text-2xl md:text-xl pl-2 tracking-wide text-gray-800">Dashboard</h2>
      </div>
   
      <form className="w-2/4 relative hidden lg:block">
        <input className="outline-1 outline-gray-400 w-full mt-1 py-1 bg-gray-200 border-solid border-gray-300 border-2 pl-4 rounded-md" type="text" placeholder="Search" />
        <button className="rounded-md p-1 inline-block absolute right-1 top-2 bg-blue-500 text-white" type="submit">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </form>

      <div onClick={() => setShowDropdown(!showDropdown)} className="relative cursor-pointer pr-4 flex items-center border-gray-300 border-2 bg-gray-200 rounded-md">
        <img className="rounded w-6 m-1" src="/images/profile-pic.jpg" alt="profile-pic" />
        <span className="font-semibold mx-2 text-sm select-none">Prem Shahi</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        <div className={`p-2 rounded-lg bg-gray-50 absolute right-0 top-9 shadow-2xl ${showDropdown ? 'block' : 'hidden'}`}>
          <ul>
            <li><a href="#" className="text-black font-semibold">Action</a></li>
            <li><a href="#" className="text-black font-semibold">Another action</a></li>
            <li><a href="#" className="text-black font-semibold">Something else here</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
