import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events" element={<EventsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
