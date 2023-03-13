import {Link} from 'react-router-dom';
export default function CallToAction() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">Our vision is to offer a great variety of dishes with an affordable price, without sacrifice the quality.</p>
                </section>

                <section className="hero-image">
                    <img src="restaurant chef B.jpg" alt="Little Lemon restaurant cuisine"></img>
                </section>
                <section>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>
            </article>
      </header>
    );
}