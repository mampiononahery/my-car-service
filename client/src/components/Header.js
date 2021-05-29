import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


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
			<div className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link to={"/login"} className="nav-link">
						Connexion
					</Link>
				</li>
				<li className="nav-item">
					<Link to={"/signup"} className="nav-link">
						Créer un compte
					</Link>
				</li>
      </div>
		</Navbar>
	);

}

export default Header;