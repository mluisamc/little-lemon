import { Routes, Route } from "react-router-dom";
import App from "./App.js";
import Booking from "./BookingPage.js";

function Main() {
    return (
        <Routes>
        <Route path="/" element={<App />} />


        <Route path="/bookings" element={<Booking />} />

        </Routes>
    )
}

export default Main;