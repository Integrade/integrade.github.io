import {Navbar, Container, Nav} from 'react-bootstrap'
import {navLinks} from '../data/index'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src='../assets/img/bg/logo_putih.jpg'
              width="30" 
              height="30"
              className="d-inline-block align-top" 
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => {
                return (
                  <div className='nav-link' key={link.id}>
                     <NavLink to={link.path}>{link.text}</NavLink>
                  </div>
                )
              })}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent