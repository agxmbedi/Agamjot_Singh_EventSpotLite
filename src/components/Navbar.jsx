// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-white shadow-lg fixed w-full z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     <div className="flex-shrink-0 flex items-center">
//                         <Link
//                             to="/"
//                             className="text-2xl font-bold text-indigo-600"
//                         >
//                             EventSpot Lite
//                         </Link>
//                     </div>

//                     <div className="hidden md:flex items-center space-x-4">
//                         <Link
//                             to="/"
//                             className="text-gray-600 hover:text-indigo-600 transition-colors"
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             to="/events"
//                             className="text-gray-600 hover:text-indigo-600 transition-colors"
//                         >
//                             Events
//                         </Link>
//                     </div>

//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="text-gray-600 hover:text-gray-900 focus:outline-none"
//                         >
//                             {isOpen ? (
//                                 <XMarkIcon className="h-6 w-6" />
//                             ) : (
//                                 <Bars3Icon className="h-6 w-6" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile menu */}
//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="md:hidden"
//                 >
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link
//                             to="/"
//                             className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
//                             onClick={() => setIsOpen(false)}
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             to="/events"
//                             className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
//                             onClick={() => setIsOpen(false)}
//                         >
//                             Events
//                         </Link>
//                     </div>
//                 </motion.div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // Apply the dark or light theme to the document body
        if (isDarkTheme) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <nav className={`${isDarkTheme ? "bg-gray-800" : "bg-white"} shadow-lg fixed w-full z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="/"
                            className={`text-2xl font-bold ${isDarkTheme ? "text-white" : "text-indigo-600"}`}
                        >
                            EventSpot Lite
                        </Link>
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full transition-colors focus:outline-none"
                    >
                        {isDarkTheme ? (
                            <SunIcon className="h-6 w-6 text-yellow-500" />
                        ) : (
                            <MoonIcon className="h-6 w-6 text-gray-600" />
                        )}
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className={`${isDarkTheme ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-indigo-600"} transition-colors`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/events"
                            className={`${isDarkTheme ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-indigo-600"} transition-colors`}
                        >
                            Events
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${isDarkTheme ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} focus:outline-none`}
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className={`block px-3 py-2 ${isDarkTheme ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-indigo-600"}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/events"
                            className={`block px-3 py-2 ${isDarkTheme ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-indigo-600"}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Events
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
