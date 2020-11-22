import React from "react";
import SelectSearch from "./SelectSearch.jsx";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import "./style.css";
import { locations, times, issues } from "./data";

class SearchProjects extends React.Component{
	render() {
		return (
			<React.Fragment>
				<Row className="mt-5">
					<Col className="text-left">
						<h2 className="titles font-weight-bold">SEARCH PROJECTS IN NEED OF VOLUNTEERS</h2>
						</Col>
						</Row>
						<Row>
	     <SelectSearch
        options={locations}
        search
        emptyMessage="Not found"
        placeholder="Locations..."
    		/>
				<SelectSearch
        options={times}
        search
        emptyMessage="Not found"
        placeholder="When I am free..."
    		/>
				<SelectSearch
        options={issues}
        search
        emptyMessage="Not found"
        placeholder="Issues I care about..."
    		/>
				<Button variant="danger">SEARCH</Button>
			</Row>
			</React.Fragment>
		);
	}
}

export default SearchProjects;
