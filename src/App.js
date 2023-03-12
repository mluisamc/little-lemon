import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>

      <Routes>
        <Route path="/reservations" element={<BookingPage />} />
       </Routes>
    </>
  )
}

export default App;
