import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ width: '100%', paddingLeft: '15px', paddingRight: '15px' }}>
      <Navbar.Brand as={Link} to="/">Study Buddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/users">Users</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;