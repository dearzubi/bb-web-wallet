import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Faq from "../components/Faq";
import { useSelector } from "react-redux";
import { setSelectedTech } from "../store/WalletSlice";

interface Owner {
    owner: string;
    address: string;
  }

const CreateAccountN = () => {


    const selTech = useSelector(setSelectedTech);
    const [owners, setOwners] = useState<Owner[]>([
        { owner: '', address: '' },
    ])



    useEffect(() => {
        console.log(selTech);
    }, [selTech]);

    const handleOwnerChange = (newOwner: string, index: number) => {
        const updatedOwners = [...owners];
        updatedOwners[index].owner = newOwner;
        setOwners(updatedOwners);
    };

    const handleAddressChange = (newAddress: string, index: number) => {
        const updatedOwners = [...owners];
        updatedOwners[index].address = newAddress;
        setOwners(updatedOwners);
    };

    const addNewOwner = () => {
        setOwners([...owners, { owner: '', address: '' }]);
    };

    const deleteOwner = (index: number) => {
        const updatedOwners = [...owners];
        updatedOwners.splice(index, 1);
        setOwners(updatedOwners);
    };


    const faqs = [
        {
            question: 'Flat hirarchie',
            answer: 'Every owner has the same rights within the Safe Account and can propose, sign and execute transactions that have the required confirmations.'
        },
        {
            question: 'Managing Owners',
            answer: 'You can always change the number of owners and required confirmations in your Safe Account after creation.'
        },
        {
            question: 'BB Account Setup',
            answer: 'Not sure how many owners and confirmations you need for your Safe Account?'
        }
    ];

    return (
        <section className="bg-gray-100 min-h-screen">
            <div className="mt-14 mx-32">
                <h2 className="text-2xl font-semibold text-gray-800 my-6">Create new BB Account</h2>
                <div className="flex ">
                    <div className="w-[800px] rounded-lg bg-white p-4 relative px-8">
                        <div className="h-1 w-full bg-gray-300 rounded-full overflow-hidden absolute top-0 left-0">
                            <div className="h-full w-2/3 bg-purple-500"></div>
                        </div>
                        <span className="bg-gray-700 rounded-full p-1 text-white text-xs font-semibold mx-3">3</span>
                        <h5 className="text-lg font-semibold text-gray-800 "> Owners and confirmations</h5>
                        <p className="text-xs text-gray-600">Set the owner wallets of your Safe Account and how many need to confirm to execute a valid transaction.</p>
                        <hr className="my-6" />

                        <AnimatePresence>
                            {owners.map((ownerData, index) => (
                                <motion.div
                                    className='flex gap-8 my-2'
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    
                                >
                                    <div className="w-[25%]">
                                        <div className="relative h-12 w-full min-w-[200px]">
                                            <input
                                                className="peer h-full w-full rounded-[7px] border-2 border-purple-300  bg-transparent px-3 py-5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 hover:border-purple-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                                value={ownerData.owner}
                                                onChange={(e) => handleOwnerChange(e.target.value, index)}
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Owner {index + 1}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-[50%]">
                                        <div className="relative h-12 w-full min-w-[200px]">
                                            <input
                                                className="peer h-full w-full rounded-[7px] border-2 border-purple-300  bg-transparent px-3 py-5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 hover:border-purple-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "
                                                value={ownerData.address}
                                                onChange={(e) => handleAddressChange(e.target.value, index)}
                                            />
                                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Address
                                            </label>
                                        </div>
                                    </div>
                                    {index > 0 && (
                                        <div className="w-[15%] flex items-center text-xl">
                                            <FaTrashAlt
                                                className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                                                onClick={() => deleteOwner(index)}
                                            />
                                        </div>
                                    )}

                                </motion.div>
                            ))}
                        </AnimatePresence>


                        <hr className="my-5" />
                        <a className="text-xs text-gray-800 cursor-pointer font-semibold py-2 px-4 mt-16 rounded-md hover:bg-gray-100 transition-colors "
                            onClick={addNewOwner}
                        >
                            + Add new Owner
                        </a>
                        <div className="flex justify-end">
                            <button className="px-8 my-2 py-2 bg-gray-950 hover:bg-gray-800 transition-colors text-sm text-white font-semibold rounded-md "

                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="w-[320px] ml-10 flex flex-col p-2 h-52 border-gray-400 border bg-white rounded-md">
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
                            <hr className="my-3" />
                            <div className="flex justify-between">
                                <span className="text-[14px] text-gray-700">Name</span>
                                <span className="text-[14px] text-gray-700">Wallet</span>
                            </div>
                        </div>
                        <div className="mt-5 -ml-2">

                            <div className="bg-cyan-100 border-2 mt-1 w-64 border-cyan-500 text-white rounded-md shadow-sm shadow-cyan-500">
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

export default CreateAccountN