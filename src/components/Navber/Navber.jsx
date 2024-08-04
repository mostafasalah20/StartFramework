

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navber() {


  const [isOpen, setIsOpen] = useState(false);

  const [newscroll, setnewscroll] = useState(false)
  const change = () => {
    if (window.scrollY > 30) {
      setnewscroll(true)
      // console.log("true");
    } else {
      setnewscroll(false)
      // console.log("false");
    }

  }
  window.addEventListener('scroll', change)
  return (<>

    <div className=" fixed w-full z-[999] ">
      <div >


        <nav className="bg-[#2c3e50]  dark:bg-gray-900">
          <div className={newscroll ? 'addscr' : 'addScroll'}>
            <li href='#' className="flex items-center md:justify-center md:w-2/5 ">
              <h1  className="self-center text-4xl font-semibold text-white whitespace-nowrap dark:text-white" >Start Framework</h1>
            </li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`${isOpen ? 'block   ' : 'hidden '
                } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="w-full md:flex flex-col px-4 md:p-0 mt-1  pt-6 bg-[#2c3e50] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">

                {/* <li>
                  <NavLink to="" className="block py-2 my-3  text-white rounded   md:border-0  md:p-0  text-2xl "></NavLink>
                </li> */}
                <li>
                  <NavLink to="about" className="block py-2 my-3  text-white rounded   md:border-0  md:p-0  text-2xl">About</NavLink>
                </li>
                <li>
                  <NavLink to="portfolio" className="block py-2 my-3 text-white rounded   md:border-0  md:p-0 text-2xl ">portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="contact" className="block py-2 my-3 pb-5  text-white rounded   md:border-0  md:p-0 text-2xl ">Contact</NavLink>
                </li>
              </ul>

            </div>
          </div>
        </nav>

      </div>












    </div>





  </>)





}





//  {/* <li>
//                   <NavLink to="" className="block py-2  text-white rounded   md:border-0  md:p-0 text-2xl"></NavLink>
//                 </li> */}

