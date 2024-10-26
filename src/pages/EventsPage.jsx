import { useState } from "react";
import { motion } from "framer-motion";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import SearchBar from "../components/SearchBar";

const EventsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredEvents = events.filter((event) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            event.title.toLowerCase().includes(searchLower) ||
            event.location.toLowerCase().includes(searchLower)
        );
    });

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    return (
        <div className=" bg-black min-h-screen pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <SearchBar value={searchTerm} onChange={setSearchTerm} />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <EventCard
                                event={event}
                                onClick={handleEventClick}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <EventModal
                    event={selectedEvent}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
};

export default EventsPage;
