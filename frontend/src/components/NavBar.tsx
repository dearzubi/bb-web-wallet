import { FaRegBell } from "react-icons/fa";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
const NavBar = () => {

    const [connected, setConnected] = useState(false)
  return (
    <nav>
      <div className="mx-4 mt-2 flex justify-between border-b-2 border-gray-200">
        <div>
          <span className="cursor-pointer text-2xl font-bold">Safe Wallet</span>
        </div>
        <div className="flex justify-evenly align-middle ">
          <motion.button
            className="mx-4 cursor-pointer relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaRegBell />

            <span className="absolute top-1 -right-[8px] inline-flex justify-center items-center text-center h-4 w-4  text-xs font-semibold text-white rounded-full bg-rose-500">10</span>
          </motion.button>
          <div className="h-7 border-r-2 border-gray-200"></div>

          <div className=" mx-4 cursor-pointer ">
            <div className="rounded-full bg-neutral-100 p-2">
              <BsFillPersonFill />
            </div>
            <span className="relative flex h-2 w-2">
              <span className={`absolute bottom-2 left-5 inline-flex h-full w-full animate-ping rounded-full ${connected ? "bg-green-400" : "bg-red-400"}  opacity-75`}></span>
              <span className={`relative bottom-2 left-5 inline-flex h-2 w-2 rounded-full  ${connected ? "bg-green-500" : "bg-red-500"}`}></span>
            </span>
          </div>
          <div>
            <div className="text-xs text-neutral-600">Not Connected</div>
            <div className="text-xs text-red-500 cursor-pointer hover:text-red-700">Connect Wallet</div>
          </div>
          <span className="cursor-pointer text-3xl hover:text-neutral-700 hover:translate-y-0.5 transition duration-500">
            <MdOutlineKeyboardArrowDown />
          </span>
          <div className="h-7 border-r-2 border-gray-200"></div>
          <div>
            <button className="ml-4 rounded-md bg-neutral-200 p-2 text-xs hover:bg-neutral-300 transition duration-300">
              Ethereum
            </button>
          </div>
          <div className="cursor-pointer text-3xl hover:translate-y-0.5 transition duration-500 ">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
