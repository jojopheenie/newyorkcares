import React from "react";
import logo from "../images/newyorkcares_logo.jpg"
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import "./header.css"

class Header extends React.Component{
	render() {
		return (
			<React.Fragment>
				<Row><Col sm={4}><img src={logo} height={80} width={200} alt="Logo" ></img></Col>
				<Col sm={8}><em className="header">Meets pressing community needs by mobilizing caring New Yorkers in volunteer service.</em></Col>
				</Row>
			<Row></Row>
			</React.Fragment>
		);
	}
}

export default Header;
