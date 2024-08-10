'use client'
import { useState } from 'react';



export default function Navbar() {
    // State for the dropdown visibility
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

    // Toggle User Menu
    const toggleUserMenu = () => {
        setIsUserMenuOpen(prev => !prev);
    };

    // Toggle Company Menu
    const toggleCompanyMenu = () => {
        setIsCompanyMenuOpen(prev => !prev);
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center -ml-56 rtl:space-x-reverse gap-6">
                        <img src="/placeholder.logo.svg" className="h-32 rounded-full" alt="ABQ-CAR Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Albuquerque - Catch a Ride
                        </span>
                    </a>
                    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="flex text-xs bg-gray-800 rounded-full md:me-0 dark:focus:ring-gray-600"
                            onClick={toggleUserMenu}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-24 h-24 rounded-2xl" src="/placeholder.person.png" alt="user photo"/>
                        </button>
                        {/*add google map box here to the right of user's profile*/}
                        <img className="w-36 h-36" src="../../../public/map-placeholder.png" alt="Google Maps - User Location"/>
                        {isUserMenuOpen && (
                            <div
                                className="absolute top-full left-full mt-2 w-48 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">User's Name</span>
                                    <span
                                        className="block text-sm text-gray-500 truncate dark:text-gray-400">users@email.com</span>
                                </div>
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            onClick={toggleCompanyMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>

                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col text-xl font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                   aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    About
                                </a>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={toggleCompanyMenu}
                                >
                                    Services
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                    Marketplace
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {isCompanyMenuOpen && (
                        <div id="mega-menu-full-dropdown"
                             className="absolute left-1/2 top-28 mt-2 w-80 transform -translate-x-1/2 z-50 border-gray-200 shadow-lg bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                            <div
                                className="grid grid-cols-1 md:grid-cols-1 gap-4 px-4 mx-auto text-gray-900 dark:text-white md:px-6">
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <div className="font-semibold">Online Stores</div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <div className="font-semibold">Segmentation</div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <div className="font-semibold">Marketing CRM</div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <div className="font-semibold">Online Stores</div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                </div>
            </nav>

        </>
    );
}
