import React from 'react';
import {Link} from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import coatDrive from "../images/coat drive home.jpg";
import covid from "../images/COVID_Website_2020-05_Homepage_Mini_2.png";
import "./pages.css";
import Header from "../components/header";
import Slider from "../components/slider";
import SearchProjects from "../components/searchprojects";
import Navi from "../components/navigation";
import Tabs from "../components/tabs"

class Home extends React.Component{
	render() {
		return (
			<React.Fragment>
				<Row><Col><Navi/></Col></Row>
				<Row>
					<Header/>
				</Row>
				<Row><Tabs/></Row>
				<Row><Slider/></Row>
				<Row>
					<SearchProjects/>
				</Row>
				<Row>
					<Col className="text-left">
					<h2 className="titles font-weight-bold">SUPPORT THE 2020 COAT DRIVE</h2>
						<Row>
							<Col>
								<img alt="Coat Drive" src={coatDrive}/>
							</Col>
							<Col md={7}>
								<p>We believe a winter coat should not be a luxury. No one should have to skip a meal to buy a winter coat. No parent should be forced to choose between buying school supplies and staying warm. No essential worker should commute without a warm coat on their back. This year, we're focused on providing coats to residents of communities most impacted by COVID-19 and the resulting economic crisis. Every $20 donated buys a new coat for a New Yorker in need!
								</p>
								<Link to='/' style={{"color": "red", "text-decoration": "underline"}}>Join Us</Link>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col className="text-left">
						<h2 className="titles font-weight-bold">OUR RESPONSE TO COVID-19</h2>
						<Row>
							<Col>
								<img alt="Covid" src={covid}/>
							</Col>
							<Col md={7}>
								<p>New Yorkers step up in times of uncertainty. It happened after 9/11 and Hurricane Sandy, and we see the same in response to COVID-19.&nbsp;Since our relief efforts began in March, more than <strong>33,100 volunteers</strong>&nbsp;have devoted over <strong>114,000&nbsp;hours</strong>&nbsp;on <strong>nearly 5,900&nbsp;projects. </strong>More than <strong>22</strong>&nbsp;<strong>million meals</strong>&nbsp;have been distributed to New Yorkers in need. We've moved in-person programs like College Access and Citizenship Prep online and&nbsp;are adding new virtual opportunities every week. Volunteers are providing&nbsp;academic support and recreation for students learning at home, conducting wellness calls to homebound seniors, reaching out to local veterans, and more.&nbsp;</p>
								<Link to='/' style={{"color": "red", "text-decoration": "underline"}}>Learn More</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}
export default Home;
