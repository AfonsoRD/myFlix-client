import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar
          key={expand}
          bg='light'
          expand={expand}
          className='mb-3'
        >
          <Container fluid>
            <Navbar.Brand
              as={Link}
              to='/'
            >
              My Flix
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link
                    as={Link}
                    to='/'
                  >
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title='Dropdown'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {!user && (
                      <>
                        <NavDropdown.Item
                          as={Link}
                          to='/login'
                        >
                          Login
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={Link}
                          to='/signup'
                        >
                          Signup
                        </NavDropdown.Item>
                      </>
                    )}
                    {user && (
                      <>
                        <NavDropdown.Item
                          as={Link}
                          to='/'
                        >
                          Home
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={onLoggedOut}>
                          Logout
                        </NavDropdown.Item>
                      </>
                    )}
                  </NavDropdown>
                </Nav>
                <Form className='d-flex'>
                  <Form.Control
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                  />
                  <Button variant='outline-success'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;
