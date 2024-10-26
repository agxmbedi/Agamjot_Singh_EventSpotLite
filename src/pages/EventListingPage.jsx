import React from 'react';
import { motion } from 'framer-motion';

const EventListingPage = () => {
  // Assuming you have an events array with event data
  const events = [
    // ... your event data here
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-400 mb-4">{event.date}</p>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
                  Get Tickets
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventListingPage;
