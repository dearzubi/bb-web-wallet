import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface FAQItemProps {
  question: string;
  answer: string;
}


const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="">
                <div className="flex items-center justify-between px-2">
                    <h5 className={`text-xs text-gray-800 ${isOpen ? 'font-bold' : ""} `}>{question}</h5>
                    <div
                        onClick={toggle}
                        className={`cursor-pointer rounded-full p-1 transition-all duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                    >
                        <MdOutlineKeyboardArrowDown className="text-cyan-600 hover:text-white text-3xl hover:bg-cyan-500 rounded-full" />
                    </div>
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-500 ${isOpen ? 'max-h-32' : 'max-h-0'
                        }`}
                >
                    <p className="py-3 px-4 text-xs text-gray-600">{answer}</p>
                </div>
            </div>
        </div>
    );


};

export default FAQItem;
