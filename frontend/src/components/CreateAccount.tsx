
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Faq from "../components/Faq";
import { useSelector } from "react-redux";
import { setSelectedTech } from "../store/WalletSlice";
import { Link } from "react-router-dom";
const CreateAccount = () => {


    const [showDropdown, setShowDropdown] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const selTech = useSelector(setSelectedTech);


    useEffect(() => {
        console.log(selTech);
    }, [selTech]);


    const faqs = [
        {
            question: 'Network Fee',
            answer: 'Deploying your Safe Account requires the payment of the associated network fee with your connected wallet. An estimation will be provided in the last step.'
        },
        {
            question: 'Address Book Privacy',
            answer: 'The name of your Safe Account will be stored in a local address book on your device and can be changed at a later stage. It will not be shared with us or any third party.'
        }
    ];

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

    const panelRef = useRef<HTMLDivElement>(null);


    const handleDropDown = () => {
        setShowDropdown(!showPanel); 
    };


    const handleClickOutside = (e: MouseEvent) => {
        if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
            setShowDropdown(false);

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
        <section className="bg-gray-100 min-h-screen">
            <div className="mt-14 mx-40">
                <h2 className="text-2xl font-semibold text-gray-800 my-6">Create new BB Account</h2>
                <div className="flex ">
                    <div className="w-[900px] rounded-lg bg-white p-4 relative mx-6">
                        <div className="h-1 w-full bg-gray-300 rounded-full overflow-hidden absolute top-0 left-0">
                            <div className="h-full w-1/3 bg-purple-500"></div>
                        </div>
                        <div className="grid grid-cols-12">

                            <span className="bg-gray-700 rounded-full mx-3 col-span-1 flex place-self-center p-1 text-white text-xs font-semibold">2</span>
                            <div className="col-span-11">
                            <h5 className="text-lg font-semibold text-gray-800 "> Select network and name of your BB Account</h5>
                                <p className="text-xs text-gray-600">Select the network on which to create your BB Account</p>
                                </div>
                        </div>
                        <hr className="my-6" />
                        <div className="flex">
                            <div className="w-2/3">
                                <div className="relative h-12 w-full min-w-[200px]">
                                    <input
                                        className="peer h-full w-full rounded-[7px] border border-purple-200 border-t-transparent bg-transparent px-3 py-5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 hover:border-purple-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Name
                                    </label>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="mx-2 text-gray-700 cursor-pointer relative">
                                    <span className={`text-xs rounded-2xl `}>{selTech.name}</span>
                                    <motion.button
                                        className="cursor-pointer text-3xl group"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleDropDown}
                                    >
                                        <MdOutlineKeyboardArrowDown />
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
                                                    ref={panelRef} // Assign the ref to the panel element
                                                    className="absolute right-0 mt-5 bg-white border border-gray-200 p-4 rounded-lg w-28 shadow-lg z-50"
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={panelVariants}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ul>
                                                        {dropDownItems.map((item) => (
                                                            <li key={item.id} className="py-1 text-white transition-colors hover:bg-gray-200">
                                                                <a style={{ backgroundColor: item.color }} className="text-[0.5rem] px-3 py-1 rounded-md">
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
                        <hr className="my-5" />
                        <div className="flex justify-end">
                            <Link to="/createNP" >
                                <button className="px-8 my-2 py-2 bg-gray-950 hover:bg-gray-800 transition-colors text-sm text-white font-semibold rounded-md "

                                >
                                    Next
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-80 ml-10 flex flex-col p-2 h-40 border-gray-400 border bg-white rounded-md">
                        <div>
                            <h5 className="text-md text-gray-800 mt-8 text-center font-medium">Your BB Account Preview</h5>
                            <hr className="my-3" />
                            <div className="flex justify-between my-2">
                                <span className="text-[14px] text-gray-700">Wallet</span>
                                <span className="text-[14px] text-gray-700">Wallet</span>
                            </div>
                            <hr className="my-3" />
                            <div className="flex justify-between">
                                <span className="text-[14px] text-gray-700">Network</span>
                                <span className="text-[14px] text-gray-700">Wallet</span>
                            </div>
                            
                        </div>
                        <div className="mt-5 -ml-2">

                            <div className="bg-cyan-100 border-2 mt-1 w-80 border-cyan-500 text-white rounded-md shadow-sm shadow-cyan-500">
                                {faqs.map((faq, index) => (
                                    <Faq key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div>

            </div>
        </section>
    );
}

export default CreateAccount