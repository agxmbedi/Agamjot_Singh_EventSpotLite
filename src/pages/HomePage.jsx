import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center py-20">
                    <motion.h1
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl"
                    >
                        Discover Amazing Events
                    </motion.h1>
                    <motion.p
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
                    >
                        Find and join the best local events happening around
                        you.
                    </motion.p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/events"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                Browse Events
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomePage;
