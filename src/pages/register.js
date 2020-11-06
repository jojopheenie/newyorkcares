import React from 'react';
import {Form, Button} from 'react-bootstrap'
import { fireAuth } from "../constants/fireapi";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
	state = {
		email: "",
		password: "",
	};

	registerUser = history => () => {
		return fireAuth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
			return this.props.history.push("/login");
		});
	};


	handleChange = key => e => {
		this.setState({ [key]: e.target.value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<React.Fragment>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email"
						              label={"Email"}
						              required
						              onChange={this.handleChange("email")}
						              name="email" value={email} placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password"
						              required
						              placeholder="Password"
						              label={"Password"}
						              value={password}
						              onChange={this.handleChange("password")}/>
					</Form.Group>
					<Button onClick={(e) => this.registerUser()} variant="primary" type="button">Register</Button>
				</Form>
			</React.Fragment>
		);
	}
}

export default withRouter(Register);
