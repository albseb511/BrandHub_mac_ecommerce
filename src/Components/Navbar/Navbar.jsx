import {Container , NavDropdown , Nav , Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavbarIs = () => {

    return(
        <div>

   <Navbar  collapseOnSelect expand="lg" bg="black" variant="dark">
  <Container className="navbar" >
  <Navbar.Brand href="/"><h1>BrandHub</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

    
      <Nav.Link href="/tshirt">T-Shirt</Nav.Link>
      <Nav.Link href="/shirt">Shirt</Nav.Link>
   
      
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets"></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      </Nav.Link>
      <div className="cartIcon">
        <a href="/cart"><img src="https://thumbs.dreamstime.com/b/shopping-icon-shopping-cart-icon-dark-background-simple-vector-icon-shopping-icon-shopping-cart-icon-dark-background-116659167.jpg" alt="" height="100%" width="100%" /></a>
      </div>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
            
        </div>
    )
}