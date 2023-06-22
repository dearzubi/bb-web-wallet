import { BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import ConnectModal from "./ConnectModal";

const Header = () => {

  const [connected, setConnected] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

  };


  return (
    <div className="flex mx-6 bg-gray-100">
      <div className="w-1/3 rounded-lg mr-5 mt-10 bg-white">
        <h3 className="text-lg font-semibold p-5">My BB Accounts</h3>
        <hr />
        <div className="flex flex-col items-center justify-center text-center h-64">
          <div className=" mx-4 cursor-pointer ">
            <div className="rounded-full bg-neutral-100 p-2">
              <BsFillPersonFill />
            </div>
            <span className="relative flex h-2 w-2">
              <span className={`absolute bottom-2 left-5 inline-flex h-full w-full animate-ping rounded-full ${connected ? "bg-green-400" : "bg-red-400"}  opacity-75`}></span>
              <span className={`relative bottom-2 left-5 inline-flex h-2 w-2 rounded-full  ${connected ? "bg-green-500" : "bg-red-500"}`}></span>
            </span>
          </div>
          <p className="text-xs font-light text-gray-600 ">
            Connect a wallet to view your <br /> BB Accounts or to create a new one.
          </p>
          <button className="px-8 mt-6 py-2 bg-gradient-to-r from-purple-400 to-indigo-500 hover:bg-gradient-to-l transition duration-500 ease-in text-sm text-white font-semibold rounded-md"
            onClick={toggleModal}
          >
            Connect Wallet
          </button>

        </div>

      </div>
      <div className="w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500 p-10 text-4xl font-bold mt-10 rounded shadow-lg hover:shadow-none transition-shadow duration-500 shadow-indigo-500 mx-auto text-white">
        Create Safe Wallet Account
        <div className="text-xl font-sans font-normal mt-4">
          The most trusted decentralized custody protocol and collective asset
          management platform.
        </div>
        <div className="flex flex-col max-w-xs mx-auto rounded-md bg-white p-8 justify-start mt-4 text-gray-800">
          <div className="flex-shrink-0">
            <motion.button
              className="text-5xl cursor-pointer text-green-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsPlus />
            </motion.button>
          </div>
          <div className="text-xl font-bold mb-4">Create Safe Wallet</div>
          <div className="text-sm font-normal mb-4">
            A new Account that is controlled by one or multiple owners.
          </div>
          <Link to="/create">
            <a
              className="inline-block text-center rounded border border-indigo-600 px-2 py-3 text-sm font-text text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gradient-to-r from-purple-500 to-indigo-500 transition-colors duration-300 active:translate-y-0.5 active:shadow-lg"

            >
              + Create New Wallet/Account
            </a>
          </Link>
        </div>
      </div>
      <ConnectModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Header;
