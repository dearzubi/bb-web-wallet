import { motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';
import { FcOldTimeCamera } from 'react-icons/fc';

interface ConnectModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, toggleModal }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

    const modal = {
        hidden: { y: "-100vh", opacity: 0, scale: 0 },
        visible: {
            y: "0",
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
    };

    return isOpen && (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            variants={backdrop}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            onClick= {toggleModal}
            exit="hidden"
            style={{ zIndex: 9999 }}
        >
            <motion.div
                className="rounded-2xl flex h-[50vh] w-[800px] "
                variants={modal}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="w-1/3 flex flex-col gap-2 bg-[#dcdee0] py-10 px-5">
                    <h1 className='text-3xl font-medium '>Get Started</h1>
                    <h4 className='font-medium '>Connect Your Wallet</h4>
                    <p className='text-sm text-gray-700 mt-1'>
                        Connecting your wallet is like “logging in” to Web3. Select your
                        wallet from the options to get started.
                    </p>
                </div>
                <div className="w-2/3 flex flex-col bg-white p-3">
                    <div className='flex justify-between'>
                        <h5 className='font-semibold'> Availble Wallets</h5>
                       <RxCross1 onClick={toggleModal} className='cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 text-xl p-1'/>

                    </div>
                    <hr className='my-1' />
                    <div className='flex flex-col'>
                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <div className='border-2 rounded-lg flex items-center border-gray-200 w-full h-16 hover:border-purple-600 hover:bg-purple-100 hover:shadow-md hover:shadow-purple-400 cursor-pointer transition-all duration-300'>
                                <FcOldTimeCamera className='text-4xl text-purple-500 p-2 ml-2 rounded-lg border-2 border-gray-200 place-content-center' />
                                <span className='ml-3 text-xl'>Meta Mask</span>
                            </div>
                            <div className='border-2 rounded-lg flex items-center border-gray-200 w-full h-16 cursor-pointer hover:border-purple-600 hover:bg-purple-100 hover:shadow-md hover:shadow-purple-400 transition-all duration-300'>
                                <FcOldTimeCamera className='text-4xl text-purple-500 ml-2 p-2 rounded-lg border-2 border-gray-200 place-content-center' />
                                <span className='ml-3 text-xl'>BB Wallet</span>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ConnectModal;
