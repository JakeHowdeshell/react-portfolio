import { Link, useLocation } from 'react-router-dom';

// uses object destructuring assignment to take props object variable and assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-links">
      <li className="nav-item">
        <Link
          to="/"
          // A ternary operator that checks to see if the current page is "About Me"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link from the CSS class that was created.
          className={currentPage === '/Portfolio' ? 'nav-link-active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from the CSS class that was created.
          className={currentPage === '/Contact' ? 'nav-link-active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from the CSS class that was created.
          className={currentPage === '/Resume' ? 'nav-link-active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;