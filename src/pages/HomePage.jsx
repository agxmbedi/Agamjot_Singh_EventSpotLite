import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/event1.jpeg'; // Make sure to import the image

const HomePage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4">Be a part of musical history</h1>
                    <p className="text-xl mb-8">Rock music in Australia, also known as Oz rock, Australian rock and Aussie rock, is rock music from Australia. The nation has a rich history of rock music.</p>
                    <div className="flex justify-center space-x-4">
                        <Link to="/events" className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
                            Get Tickets
                        </Link>
                        <button className="border border-white rounded-full p-3 hover:bg-white hover:text-black transition duration-300">
                            ▶
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Event cards */}
                    <EventCard
                        date="31 MARCH 2021"
                        title="Musical Evening with Elbert"
                    />
                    <EventCard
                        date="02 APRIL 2021"
                        title="Classical Jazz with Darren"
                    />
                    <EventCard
                        date="07 APRIL 2021"
                        title="HardRock Cafe 2021"
                    />
                </div>
            </div>
        </div>
    );
};

const EventCard = ({ date, title }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-900 bg-opacity-70 p-6 rounded-lg"
    >
        <p className="text-red-600 mb-2">{date}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
);

export default HomePage;
