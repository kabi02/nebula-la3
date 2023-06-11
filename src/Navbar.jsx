import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav
      className={`flex font-open-sans font-bold py-4 lg:px-32 sm:px-10 px-3 justify-between items-center ${
        isMenuOpen
          ? 'flex bg-white flex-col absolute z-20 w-full'
          : ''
      }`}
    >
      <div
        className="flex justify-between w-full items-center ">
        <div className="w-[12rem]">
          <img src="./assets/logo.png" className="w-[40%]" alt="" />
        </div>
        <button
          className="lg:hidden ml-2 p-2 rounded-md text-black"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            // close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="sm:h-6 sm:w-6 h-4 w-4 mr-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // hamburger
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="sm:h-6 sm:w-6 h-4 w-4 mr-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* desktop */}
      <div
        className={`lg:flex flex gap-14 lg:items-center justify-end `}
      >
        <ul className="lg:flex hidden lg:flex-row flex-col gap-14 grow justify-center">
          <li>
            <a href="#features" className="font-bold hover:text-gray-400 transition duration-150">
            Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="font-bold hover:text-gray-400 transition duration-150">
            Pricing
            </a>
          </li>
          <li>
            <a href="#learnmore" className="font-bold hover:text-gray-400 transition duration-150">
            Learn More
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <a
            href="#"
            className="w-32 text-center ml-3 py-2 px-6 bg-gray-100 hover:bg-gray-200 text-sm sm:text-base text-gray-900 font-bold rounded-xl transition duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="w-32 text-center ml-3 py-2 px-6 bg-black hover:bg-gray-500 text-sm sm:text-base text-white font-bold rounded-xl transition duration-200"
          >
            Buy Now
          </a>
        </div>
      </div>

    </nav>
{/* phone */}
    <div
      className={`flex flex-col order-3 px-5 min-[300px]:px-10 ${
        isMenuOpen ? 'bg-white w-2/3 min-[400px]:w-1/2 right-0 text-right h-screen z-10 absolute mt-[6rem]' : 'hidden lg:hidden'
      } lg:items-center`}
    >
      <ul className="flex flex-col gap-5 w-full py-5 lg:hidden mb-32">
        <li className="border-b-2 border-black w-full sm:pb-4 pb-2 lg:hidden">
          <a href="#features" className="font-bold hover:text-gray-400 transition duration-150 sm:mr-4 mr-2 text-sm sm:text-base">
            Features
          </a>
        </li>
        <li className="border-b-2 border-black w-full sm:pb-4 pb-2">
          <a href="#pricing" className="font-bold hover:text-gray-400 transition duration-150 sm:mr-4 mr-2 text-sm sm:text-base">
            Pricing
          </a>
        </li>
        <li className="border-b-2 border-black w-full sm:pb-4 pb-2">
          <a href="#learnmore" className="font-bold hover:text-gray-400 transition duration-150 sm:mr-4 mr-2 text-sm sm:text-base">
            Learn More
          </a>
        </li>
      </ul>
      <div className="lg:hidden flex flex-col gap-3 text-center">
        <a
          href="#"
          className="ml-3 py-2 px-6 bg-gray-100 hover:bg-gray-200 text-sm sm:text-base text-gray-900 font-bold rounded-xl transition duration-200"
        >
          About
        </a>
        <a
          href="#"
          className="ml-3 py-2 px-6 bg-black hover:bg-gray-500 text-sm sm:text-base text-white font-bold rounded-xl transition duration-200"
        >
          Buy Now
        </a>
      </div>
    </div>

    </>
  );
};

export default Navbar;
