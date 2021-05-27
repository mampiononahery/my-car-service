import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = (props) => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">My car service</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/add-car">Nouveau car</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

}

export default Header;