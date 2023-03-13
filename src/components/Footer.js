import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
      <menu>
        <li className="img-footer">
            <img src='/Logo.svg' alt="Little Lemon logo" />
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>33 S Wabash Ave</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>632-245-784</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Social</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </ul>
        </li>
      </menu>
    </footer>
    )
}

export default Footer;
