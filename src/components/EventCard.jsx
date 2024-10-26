import { motion } from "framer-motion";

const EventCard = ({ event, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(event)}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        >
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {event.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
                <div className="mt-2">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                        {event.category}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;
