import { FaRegBell } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector  } from "react-redux";
import { setTechnology } from "../store/WalletSlice";
import ConnectModal from "./ConnectModal";

const NavBar = () => {
  const [connected, setConnected] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [connectModal, setConnectModal] = useState(false);

 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setConnectModal(false);

  };


  const dropDownItems = [
    {
      id: 1,
      name: "Ethereum",
      color: "#dddddd",
    },
    {
      id: 2,
      name: "Goereli",
      color: "#4d99eb",
    },
    {
      id: 3,
      name: "Polygon",
      color: "#8248e5",
    }
  ]

  const dispatch = useDispatch();

  const panelRef = useRef<HTMLDivElement>(null);


 
  const handleTogglePanel = () => {
    setShowPanel(!showPanel); 
  };

  const handleDropDown = () => {
    setShowDropdown(!showPanel); 
  };

  const handleConnectModal = () => {
    setConnectModal(!connectModal);
    
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      setShowPanel(false);
      setShowDropdown(false);
      setConnectModal(false);
    }
  };
  

  useEffect(() => {
 
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
    
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const panelVariants = {
    hidden: { opacity: 0, y: -20, x: 0, scale: 0.80 },
    visible: { opacity: 1, y: 0, x: 10, scale: 1 },
  };

  return (
    
    <>
    <nav>
      <div className="mx-4 mt-2 flex justify-between border-b-2 border-gray-200">
        <div>
          <span className="cursor-pointer text-2xl font-bold">Safe Wallet</span>
        </div>
        <div className="flex justify-evenly align-middle">
          <div className="mx-4 cursor-pointer relative">
            <motion.button
              className="cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleTogglePanel}
            >
              <FaRegBell />

              <span className="absolute top-1 -right-[8px] inline-flex justify-center items-center text-center h-4 w-4 text-xs font-semibold text-white rounded-full bg-rose-500">
                10
              </span>
            </motion.button>
            <AnimatePresence>
              {showPanel && (
                <>
                  <motion.div
                    className="fixed inset-0 bg-black opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    ref={panelRef} // Assign the ref to the panel element
                    className="absolute left-0 mt-5 bg-white border border-gray-200 p-4 rounded-lg w-[420px] shadow-lg z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg py-2 font-semibold mb-2">Notifications</h3>
                    <hr />
                    <ul>
                      <li className="py-1 hover:bg-purple-400 hover:text-white transition-colors">Notification 1</li>
                      <li className="py-1 hover:bg-purple-400 hover:text-white transition-colors">Notification 2</li>
                      <li className="py-1 hover:bg-purple-400 hover:text-white transition-colors">Notification 3</li>
                    </ul>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className="h-7 border-r-2 border-gray-200"></div>

          <div className=" mx-4 cursor-pointer"
            onClick={handleConnectModal}
          >
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
              <MdOutlineKeyboardArrowDown
                onClick={toggleModal}
              />
          </span>
          <AnimatePresence>
            {connectModal && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black opacity-50 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  ref={panelRef}
                  className="absolute right-20 mt-10 bg-white border border-gray-200 p-4 rounded-lg w-52 shadow-lg z-50"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={panelVariants}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-md py-2 font-semibold mb-2 text-center">Connect a Wallet</h3>
                    <div className="flex flex-col space-y-3 items-center justify-center"
                    onClick={toggleModal}
                    >

                    <div className="rounded-full bg-neutral-100 p-2 ">
                      <BsFillPersonFill />
                    </div>
                    <span className="relative flex h-2 w-2">
                      <span className={`absolute bottom-4 left-3 inline-flex h-full w-full animate-ping rounded-full ${connected ? "bg-green-400" : "bg-red-400"}  opacity-75`}></span>
                      <span className={`relative bottom-4 left-3 inline-flex h-2 w-2 rounded-full  ${connected ? "bg-green-500" : "bg-red-500"}`}></span>
                    </span>
                    <button className="px-10 mt-6 py-1 bg-gray-950 hover:bg-gray-800 transition-colors text-sm text-white font-semibold rounded-md "
                      onClick={toggleModal}
                    >
                      Connect
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          <div className="h-7 border-r-2 border-gray-200"></div>
          <div>
            <button className="ml-4 rounded-md bg-neutral-200 px-2 py-1 text-[0.5rem] hover:bg-neutral-300 transition duration-300">
              Ethereum
            </button>
          </div>
          <div className="mx-2 text-gray-700 cursor-pointer relative">
            <motion.button
              className="cursor-pointer text-3xl group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDropDown}
            >
                <MdOutlineKeyboardArrowDown
              
                />
            </motion.button>
            <AnimatePresence>
              {showDropdown && (
                <>
                  <motion.div
                    className="fixed inset-0 bg-black opacity-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    ref={panelRef} 
                    className="absolute right-0 mt-5 bg-white border border-gray-200 p-4 rounded-lg w-28 shadow-lg z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <ul>
                      {dropDownItems.map((item) => (
                        <li key={item.id} className="py-1 text-white transition-colors hover:bg-gray-200">
                          <a
                            style={{ backgroundColor: item.color }}
                            className="text-[0.5rem] px-3 py-1 rounded-md"
                            onClick={() => {
                              dispatch(setTechnology(item.id));
                              setShowDropdown(false);
                              console.log(item.id);
                            }}
                          >
                            {item.name}
                          </a>

                        </li>
                      ))}
                    </ul>


                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      </nav>
      <ConnectModal isOpen={isModalOpen} toggleModal={toggleModal} />
      </>
  );
};

export default NavBar;