import { useState } from "react"
import { arrowDownIcon } from "../../assets/icons";
import userImage from '../../assets/images/profile-pic.jpg'
import Search from "./Search";

const Profile = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div onClick={() => setShowDropdown((prev) => !prev)} className="relative cursor-pointer pr-4 flex items-center border-gray-300 border-2 bg-gray-200 rounded-md">
            <img className="rounded w-6 m-1" src={userImage} alt="profile-pic" />
            <span className="font-semibold mx-2 text-sm select-none">Prem Shahi</span>
            {arrowDownIcon('w-4 h-4')}
            <ul className={`rounded-lg bg-gray-100 border-2 absolute shadow-2xl transition-all w-full p-2 duration-500 top-10 ${showDropdown ? 'right-0' : '-right-96'}`}>
                <li className="border-b-1"><button className="text-black font-semibold">Profile</button></li>
                <li className="border-b-1"><button className="text-black font-semibold">Setting</button></li>
                <li className="border-b-1"><button className="text-black font-semibold">Payment List</button></li>
                <li className="border-b-1"><Search className="relative lg:hidden" /></li>
            </ul>
        </div>
    )
}

export default Profile