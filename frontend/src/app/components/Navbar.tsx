'use client'
import { useState } from 'react';
import "../globals.css";



export default function Navbar() {
    // State for the dropdown visibility
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCompanyMenuOpen, setIsServiceMenuOpen] = useState(false);

    // Toggle User Menu
    const toggleUserMenu = () => {
        setIsUserMenuOpen(prev => !prev);
    };

    // Toggle Company Menu
    const toggleCompanyMenu = () => {
        setIsServiceMenuOpen(prev => !prev);
    };

    return (
        <>
            <nav className="border-b-4 border-b-black bg-amber-400 relative">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center  rtl:space-x-reverse gap-6">
                        <img src="/placeholder.logo.svg" className="h-32 rounded-full" alt="ABQ-CAR Logo"/>
                        <span className="self-center text-4xl font-semibold">
                            Albuquerque - Catch a Ride
                        </span>
                    </a>
                    <div className="relative items-center flex md:order-2 ">
                        <div className="flex flex-row items-center gap-4">
                            <div className="grid grid-cols-1">
                                <h3 className="text-center text-black">HERO</h3>
                                <button
                                    type="button"
                                    className="flex text-xs rounded-full dark:focus:ring-gray-600"
                                    onClick={toggleUserMenu}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-24 h-24 rounded-2xl" src="/placeholder.person.png"
                                         alt="user photo"/>
                                </button>
                            </div>
                            {/*add google map box here to the right of user's profile*/}
                            <img className="w-36 h-36 rounded-2xl" src="https://i.imgur.com/4mtLBO3.png"
                                 alt="Google Maps - User Location"/>
                        </div>

                        {isUserMenuOpen && (
                            <div
                                className="absolute top-full mt-2 w-48 text-white font-bold text-base list-none bg-amber-400 border border-black divide-y divide-gray-100 rounded-lg shadow"
                            >
                                <div className="px-4 py-3">
                                    <span className="block font-bold text-2xl text-white">User's Name</span>
                                    <span
                                        className="block font-bold text-lg truncate text-white">users@email.com</span>
                                </div>
                                <ul className="py-2">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-white hover:text-amber-400 hover:bg-white rounded-lg">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm hover:text-amber-400 hover:bg-white rounded-lg">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-white hover:text-amber-400 hover:bg-white rounded-lg">
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-white hover:text-amber-400 hover:bg-white rounded-lg">
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden"
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

                    <div className="items-center justify-between w-full flex md:w-auto md:order-1">
                        <ul className="flex flex-col text-2xl font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#"
                                   className="block text-black hover:text-white hover:translate-y-1"
                                   aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-white rounded hover:text-black hover:translate-y-1 md:p-0">
                                    About
                                </a>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full text-white hover:text-black hover:translate-y-1"
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
                                   className="block text-white rounded hover:text-black hover:translate-y-1">
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block text-white rounded hover:text-black hover:translate-y-1">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block text-white rounded hover:text-black hover:translate-y-1">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {isCompanyMenuOpen && (
                        <div id="mega-menu-full-dropdown"
                             className="absolute left-1/2 top-28 m-2 w-1/4 p-2 transform -translate-x-1/2 z-50 bg-amber-400 border border-black rounded-xl shadow-lg">
                            <div
                                className="gap-4 px-4 mx-auto text-white md:px-6">
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-white hover:text-amber-400">
                                            <div className="font-semibold text-lg">Taxi Rides</div>
                                            <span
                                                className="text-sm text-black">Connect with a driver to pick you up.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-white hover:text-amber-400">
                                            <div className="font-semibold text-lg">Vehicle Towing</div>
                                            <span className="text-sm text-black">On a tight budget but really need your vehicle towed? You can negotiate a price right away with one of these providers.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-white hover:text-amber-400">
                                            <div className="font-semibold text-lg">Locked out?</div>
                                            <span className="text-sm text-black">Accidently locked your keys in your car and don't have a spare? Someone can help you right away!</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-white hover:text-amber-400">
                                            <div className="font-semibold text-lg">Detailing</div>
                                            <span className="text-sm text-black">Tired of paying too much to have your car detailed? Connect with someone for a better rate.</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block p-3 rounded-lg hover:bg-white hover:text-amber-400">
                                            <div className="font-semibold text-lg">Emergency Mechanic</div>
                                            <span className="text-sm text-black">Ran out of gas? Need some radiator fluid? Something else wrong with your car and you'd like a mechanic to come to you for once? Here they are, right at your fingertips. </span>
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
