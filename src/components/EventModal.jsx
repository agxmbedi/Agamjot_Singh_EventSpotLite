import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheckCircle } from 'react-icons/fa';

const EventModal = ({ event, isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    if (!event) return null;

    const handleBooking = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsConfirmed(true);
            setTimeout(() => {
                setIsConfirmed(false);
                onClose();
            }, 2000);
        }, 2000);
    };

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
                                <FaTimes className="h-6 w-6" />
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

                                <div className="mt-6 flex gap-4">
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                                        disabled={isLoading}
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={handleBooking}
                                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors relative"
                                        disabled={isLoading || isConfirmed}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Booking...
                                            </span>
                                        ) : isConfirmed ? (
                                            <span className="flex items-center justify-center">
                                                <FaCheckCircle className="h-5 w-5 mr-2 text-green-500" />
                                                Tickets Confirmed!
                                            </span>
                                        ) : (
                                            "Book"
                                        )}
                                    </button>
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
