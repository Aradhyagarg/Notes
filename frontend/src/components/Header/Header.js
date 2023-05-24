import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">ZipperNotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto'>
                <Form inline>
                    <Form.Control 
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                </Form>
            </Nav>
            <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">My Notes</Nav.Link>
            <NavDropdown title="Aradhya Garg" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header ;