import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const EventModal = ({ event, isOpen, onClose }) => {
    if (!event) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50"
                            onClick={onClose}
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative z-50"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>

                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />

                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {event.title}
                                </h2>
                                <div className="mt-4 space-y-3">
                                    <p className="text-gray-600">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center text-gray-600">
                                        <span className="font-semibold">
                                            Date:
                                        </span>
                                        <span className="ml-2">
                                            {event.date} at {event.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <span className="font-semibold">
                                            Location:
                                        </span>
                                        <span className="ml-2">
                                            {event.location}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <span className="font-semibold">
                                            Price:
                                        </span>
                                        <span className="ml-2">
                                            {event.price}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <span className="font-semibold">
                                            Organizer:
                                        </span>
                                        <span className="ml-2">
                                            {event.organizer}
                                        </span>
                                    </div>
                                </div>

                                {/* <div className="mt-6">
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                                    >
                                        Book
                                    </button>
                                </div> */}
                                <div className="mt-6 flex gap-4">
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <button
                                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                                        >
                                            Book
                                        </button>
                                    </a>
                                </div>

                                


                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EventModal;
