import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { findIndex } from 'lodash';

import { ADMIN_ROLE } from '../constants';



const Header = (props) => {
	const { user, onLogout } = props;

	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		// check role for user connected
		if (user) {
			const roles = user.roles;
			const index = findIndex(roles, r => r === ADMIN_ROLE);
			if (index !== -1 ) {
				setIsAdmin(true);
			}
		}
	}, [user]);

	const _logout = (e) => {
		onLogout();
		e.preventDefault();
		e.stopPropagation();
	}


	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#">My car service</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>

					{/* only admin can add a car */}
					{ isAdmin && <Link to={"/car"} className="nav-link">Ajout de voiture</Link> } 
				</Nav>
			</Navbar.Collapse>
			<div className="navbar-nav ml-auto">

				{ !user ? (
					<>
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
					</>
				) : (<>
							<li><h6>Bonjour {user.username}</h6></li>
							<li>
								<Link onClick={_logout} to="#" className="nav-link">
									Deconnexion
								</Link>
							</li>
						</>)}

	
      </div>
		</Navbar>
	);

}

export default Header;