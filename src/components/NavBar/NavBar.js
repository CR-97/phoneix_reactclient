import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './logo.png';

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(prev => !prev);

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    navigate('/');
  };

  const loginRegLink = (
    <Nav className="ms-auto" navbar>
      <NavItem>
        <NavLink id="navitem" tag={Link} to="/login">
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="navitem" tag={Link} to="/register">
          Register
        </NavLink>
      </NavItem>
    </Nav>
  );

  const userLink = (
    <Nav className="ms-auto" navbar>
      <NavItem>
        <NavLink id="navitem" tag={Link} to="/">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="navitem" tag={Link} to="/search">
          Search
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle id="navitem" nav caret>
          Competitions
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem tag={Link} to="/team">Teams</DropdownItem>
          <DropdownItem tag={Link} to="/standings">Standings</DropdownItem>
          <DropdownItem tag={Link} to="/scorer">Top Scorers</DropdownItem>
          <DropdownItem tag={Link} to="/matches">Matches</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem>
        <NavLink id="navitem" tag={Link} to="/profile">
          Profile
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="navitem" href="#" onClick={logout}>
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <div>
      <Navbar id="navbar" expand="md" className="mb-4">
        <Container>
          <img src={Logo} id="logo" alt="Phoneix Football Logo" />
          <NavbarBrand id="navtitle" tag={Link} to="/">
            Phoneix Football
          </NavbarBrand>
          <NavbarToggler onClick={toggle} style={{ borderColor: 'rgba(255,255,255,0.5)' }} />
          <Collapse isOpen={isOpen} navbar>
            {localStorage.usertoken ? userLink : loginRegLink}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;