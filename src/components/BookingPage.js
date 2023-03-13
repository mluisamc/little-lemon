import BookingForm from "./BookingForm";

function BookingPage() {

  return (
    // TODO: connect to API
    <BookingForm availableTimes={["12:00","13:00","14:00"]}/>
  );
}

export default BookingPage;
