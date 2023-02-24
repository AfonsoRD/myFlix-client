import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export const NavigationBar = ({ user, onLoggedOut, handleSearchInput }) => {
  return (
    <Navbar
      bg='light'
      expand='lg'
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to='/'
        >
          My Flix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            {!user && (
              <>
                <Nav.Link
                  as={Link}
                  to='/login'
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to='/signup'
                >
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link
                  as={Link}
                  to='/'
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={`/users/${user.Username}`}
                >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Sign out</Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <Form className='d-flex'>
              {/*Input field for searching */}
              <Form.Control
                id='search-bar'
                type='text'
                placeholder='Search by title'
                className='mr-sm-2 mx-2 orange-border'
                onChange={handleSearchInput}
              />
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
