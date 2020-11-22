import React from "react";
import { fireAuth } from "../constants/fireapi";
//import {Form, Button} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const Profile = ({ displayName = "Unknown" }) => (
	<React.Fragment>
		<h1>
			My name is <b>{displayName}</b>
		</h1>
		<Button variant={"contained"} onClick={() => fireAuth.signOut()}>
			Logout
		</Button>
	</React.Fragment>
);

export default Profile;
