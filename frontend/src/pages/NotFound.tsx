import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceFrown} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

export default function NotFound(){

    return (
      <div className="flex flex-col gap-5 p-8 mt-10">

        <FontAwesomeIcon 
            className='font-heading text-9xl text-gray-600'
            icon={faFaceFrown} 
        />

        <h1 className='font-heading text-5xl text-gray-600 text-center'>
            Not found
        </h1>

        <span className="text-center">

          <Link to="/">
            <button 
              className="
                bg-white 
                rounded-sm 
                py-[5px] 
                px-[10px] 
                shadow-sm 
                font-text 
                text-lg 
                hover:text-white 
                hover:bg-gray-700 
                transition-colors
              "
            >
              <FontAwesomeIcon icon={faArrowLeftLong} className='mr-2'/> 
              Home
            </button>
          </Link>

        </span>

      </div>
    )

}