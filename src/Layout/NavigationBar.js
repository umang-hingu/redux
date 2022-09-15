
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav className="me-auto">
            <Navbar.Brand>React</Navbar.Brand>
            <Nav.Link>
              <NavLink to="/homepage">Homepage</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/">Login Page</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/registration">Registration Page</NavLink>
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
