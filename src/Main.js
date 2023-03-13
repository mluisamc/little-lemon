import Homepage from "./Homepage.js";
import BookingPage from "./BookingPage.js";
import { Routes, Route } from 'react-router-dom';

function Main() {
    return (
        <Routes>
             <Route path="/" element={<Homepage />} />
            <Route path="/reservations" element={<BookingPage />} />
       </Routes>
    )
}

export default Main;