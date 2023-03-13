import { useState } from "react";
import { Link } from 'react-router-dom';

function BookingForm(props) {
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form className="booking-form">
      <div>
        <label htmlFor="guests">Number of Guests</label> <br></br>
        <input
          type="number"
          id="guests"
          placeholder="Number of Guests"
          value={guests}
          required
          min={1}
          max={10}
          onChange={(e) => setGuests(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div>
        <Link className="action-button" to="/confirmation">
         Make Your Reservation
        </Link>
      </div>
    </form>
  );
}

export default BookingForm;
