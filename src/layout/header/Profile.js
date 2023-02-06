import { useState, useRef } from "react"
import { arrowDownIcon } from "../../assets/icons";
import userImage from '../../assets/images/profile-pic.jpg'
import Search from "../../components/search/Search";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { useDispatch } from "react-redux";
import { logoutUserRequest } from "../../store/auth/authActions";

const Profile = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const wrapperRef = useRef()
    const disptach = useDispatch()

    const showProfileMenuHandler = () => setShowDropdown((prev) => !prev)

    const hideProfileMenu = () => setShowDropdown(false)
    useOutsideAlerter(wrapperRef, hideProfileMenu)

    const logoutHandler = () => disptach(logoutUserRequest())

    return (
        <div className="relative w-1/2 sm:w-fit" ref={wrapperRef} >
            <div onClick={ showProfileMenuHandler } className=" cursor-pointer pr-4 flex items-center justify-evenly border-gray-300 border-2 bg-gray-200 rounded-md">
               <img className="rounded w-6 m-1" src={userImage} alt="profile-pic" />
                <span className="font-semibold mx-2 hidden xs:block text-sm select-none">{localStorage.getItem('userName')}</span>
                 {arrowDownIcon('w-4 h-4')} 
            </div>
            
            <ul className={`rounded-lg bg-gray-100 border-2 absolute shadow-2xl transition-all w-full p-2 duration-500 top-10 ${showDropdown ? 'right-0' : '-right-96'}`}>
                <li className=" hover:border-b-2 hover:border-blues"><button className="text-black font-semibold">Profile</button></li>
                <li className=" hover:border-b-2 hover:border-blues"><button className="text-black font-semibold">Setting</button></li>
                <li className=" hover:border-b-2 hover:border-blues"><button className="text-black font-semibold">Payment List</button></li>
                <li onClick={logoutHandler} className=" hover:border-b-2 hover:border-blues"><button className="text-black font-semibold">Log out</button></li>
                <li><Search className="relative sm:hidden" /></li>
            </ul>
        </div>
    )
}

export default Profile