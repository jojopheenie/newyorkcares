import React from "react";
import logo from "../images/newyorkcares_logo.jpg"

class Header extends React.Component{
	render() {
		return (
			<React.Fragment>
				<img src={logo} alt="Logo" ></img>
			</React.Fragment>
		);
	}
}

export default Header;
