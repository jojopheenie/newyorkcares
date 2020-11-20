import React from 'react';
//import { Link } from 'react-router-dom';
//import { LinkContainer } from "react-router-bootstrap";
//import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

const Navi = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Home</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">

				</Nav>
				<Nav>
					<Nav.Link href="/login">Login</Nav.Link>
					<Nav.Link href="/register">Register</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navi;
