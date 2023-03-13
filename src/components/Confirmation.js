import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <section className="reserve-header-text">
        <h1>Reservation confirmed</h1>
        <h4>Thanks!</h4>
      </section>

      <section className="redirect-buttons">
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
