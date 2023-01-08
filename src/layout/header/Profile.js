import { useState, useRef } from "react"
import { arrowDownIcon } from "../../assets/icons";
import userImage from '../../assets/images/profile-pic.jpg'
import Search from "./Search";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Profile = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const wrapperRef = useRef()

    const showProfileMenuHandler = () => {
        setShowDropdown((prev) => !prev)
    }

    const hideProfileMenu = () => {
        setShowDropdown(false)
    }

    useOutsideAlerter(wrapperRef, hideProfileMenu)
    
    return (
        <div className="relative" ref={wrapperRef} >
            <div onClick={ showProfileMenuHandler } className=" cursor-pointer pr-4 flex items-center border-gray-300 border-2 bg-gray-200 rounded-md">
               <img className="rounded w-6 m-1" src={userImage} alt="profile-pic" />
                <span className="font-semibold mx-2 text-sm select-none">Prem Shahi</span>
                 {arrowDownIcon('w-4 h-4')} 
            </div>
            
            <ul className={`rounded-lg bg-gray-100 border-2 absolute shadow-2xl transition-all w-full p-2 duration-500 top-10 ${showDropdown ? 'right-0' : '-right-96'}`}>
                <li className=" hover:border-b-2 hover:border-blues"><button className="text-black font-semibold">Profile</button></li>
                <li className=" hover:border-b-2 hover:border-blues"><button className="text-black font-semibold">Setting</button></li>
                <li className=" hover:border-b-2 hover:border-blues"><button className="text-black font-semibold">Payment List</button></li>
                <li><Search className="relative sm:hidden" /></li>
            </ul>
        </div>
    )
}

export default Profile