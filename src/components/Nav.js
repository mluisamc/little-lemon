import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
        <ul className='navbar'>
         <li>
         <img src='/Logo.svg' alt="Little Lemon logo" />
         </li>
           <li>
              <Link to="/">HOME</Link>
           </li>
           <li>
              <Link to="/about">ABOUT</Link>
           </li>
           <li>
             <Link to="/menu">MENU</Link>
           </li>
           <li>
             <Link to="/reservations">RESERVATIONS</Link>
           </li>
           <li>
             <Link to="/order">ORDER ONLINE</Link>
           </li>
           <li>
             <Link to="/login">LOGIN</Link>
           </li>
        </ul>
  </nav>
    )
}

export default Nav;