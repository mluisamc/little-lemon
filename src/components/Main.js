import Homepage from "./Homepage.js";
import BookingPage from "./BookingPage.js";
import Confirmation from "./Confirmation";
import { Routes, Route } from 'react-router-dom';

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reservations" element={<BookingPage />} />
            <Route path="/confirmation" element={<Confirmation />} />
       </Routes>
    )
}

export default Main;