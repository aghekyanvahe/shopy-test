'use client';
import Link from 'next/link';
import {useState} from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevState) => !prevState);

    return (
        <nav className="fixed top-0 w-full bg-blue-300 border-gray-200 ">
            <div className=" flex flex-wrap items-center justify-between mx-auto py-4 px-8">
                <Link href="/">
                    <span
                        className="self-center text-2xl text-white font-semibold whitespace-nowrap">Shopy</span>
                </Link>
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div
                    className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}
                    id="navbar-default"
                >
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
                    >
                        <li>
                            <Link
                              href="/"
                              className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
