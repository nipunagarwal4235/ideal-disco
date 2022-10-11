import React from "react";
import Acmlogo from "../assets/acmlogo.png";

const Navbar = () => {
  return (
    <>
      <header className="p-4 bg-sky-200  text-gray-800 font-medium">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-sky-600 border-sky-600"
              >
                Home
              </a>
            </li>

            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                About
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Event
              </a>
            </li>
          </ul>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2 "
          >
            <img class=" h-20 w-20" src={Acmlogo} alt="acm logo" />
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Our Team
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Contact Us
              </a>
            </li>
            <li className="flex my-4">
              <button className="flex items-center px-4 -mb-1  h-8 shadow-lg shadow-sky-500/40   border border-sky-400  rounded-md hover:bg-sky-400 ">
                <a href="#">Get Merch</a>
              </button>
            </li>
          </ul>
          <button title="Button" type="button" className="p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
