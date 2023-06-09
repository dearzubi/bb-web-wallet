import { BsPlus } from "react-icons/bs";
import {motion} from "framer-motion"

const Header = () => {
  return (
    <div className="max-w-3xl bg-gradient-to-r from-teal-400 via-emerald-300 to-green-300 p-10 text-4xl font-bold mt-20 rounded shadow-lg hover:shadow-none transition-shadow duration-500 shadow-emerald-400 mx-auto ">
      Create Safe Wallet Account
      <div className="text-xl font-sans font-normal mt-4">
        The most trusted decentralized custody protocol and collective asset
        management platform.
      </div>
      <div className="flex flex-col max-w-xs mx-auto rounded-md bg-white p-8 justify-start mt-4">
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
        <div className="text-sm font-normal mb-4">A new Account that is controlled by one or multiple owners.</div>
        <a
          className="inline-block text-center rounded border border-black px-2  py-3 text-sm font-text text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-600 transition-colors duration-300"
          href="/"
        >
          + Create New Wallet/Account
        </a>
      </div>
      </div>
  );
};

export default Header;
