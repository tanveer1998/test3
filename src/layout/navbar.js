import {Nav, Navbar} from 'react-bootstrap';

function Navigationbar() {
  return(
    <div>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Github API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationbar;