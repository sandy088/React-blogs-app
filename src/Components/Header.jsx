
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

import {FaSun, FaMoon} from 'react-icons/fa'

function Header() {
    const {isDarkMode, switchMode} = useContext(AppContext)

    function doSwitch() {
        const htmlElement = document.getElementsByTagName('html')[0];
        htmlElement.classList.toggle('dark', !isDarkMode);
        switchMode();
      }
    return(
        <div className="flex justify-center p-3 shadow-md py-4 border-b-2  border-b-gray-900 dark:border-grey-600 dark:drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)] drop-shadow-md fixed top-0 inset-x-0 w-full  bg-opacity-50 backdrop-blur-md z-10">
            <h1 className="text-[30px] dark:text-white  font-bold uppercase">Sandy Blogs</h1>
            <button className="absolute right-8 top-6 dark:text-white text-[26px]" onClick={doSwitch} >{ isDarkMode?  <FaSun/>: <FaMoon/>} </button>
        </div>
    )
}

export default Header