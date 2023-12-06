import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// uses object destructuring assignment to take props object variable and assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <Navbar expand="lg">
      <Nav variant="pills" defaultActiveKey="/" className="navbar">
      <Container fluid>
        <ul className="nav nav-links">
          <Navbar.Toggle aria-controls="navitems" onClick={handleToggle}>
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="navitems"
            className={`justify-content-end ${showNav ? "show" : ""}`}
          >
            <li className="nav-item">
              <Link
                to="/"
                // A ternary operator that checks to see if the current page is "About Me"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === "/" ? "nav-link-active" : "nav-link"}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                // Check to see if the currentPage is `Portfolio`, and if so we use the active link from the CSS class that was created.
                className={
                  currentPage === "/Portfolio" ? "nav-link-active" : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from the CSS class that was created.
                className={
                  currentPage === "/Contact" ? "nav-link-active" : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                // Check to see if the currentPage is `Resume`, and if so we use the active link class from the CSS class that was created.
                className={
                  currentPage === "/Resume" ? "nav-link-active" : "nav-link"
                }
              >
                Resume
              </Link>
            </li>
          </Navbar.Collapse>
        </ul>
      </Container>
      </Nav>
    </Navbar>
  );
}

export default NavTabs;
