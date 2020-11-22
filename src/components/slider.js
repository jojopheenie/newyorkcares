/** @format */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider1.png"
import slider2 from "../images/slider2.png"
import slider3 from "../images/slider3.jpg"

class Slider extends React.Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<Carousel>
						<Carousel.Item style={{ 'width': "878px"}}>
							<img
								style={{ 'height': "280px" }}
								className="d-block w-100"
								src={slider1}
								alt=""
							/>
						</Carousel.Item>
						<Carousel.Item style={{ 'width': "878px"}}>
							<img
								style={{ 'height': "280px" }}
								className="d-block w-100"
								src={slider2}
								alt=""
							/>
						</Carousel.Item>
						<Carousel.Item style={{ 'width': "878px"}}>
							<img
								style={{ 'height': "280px" }}
								className="d-block w-100"
								src={slider3}
								alt=""
							/>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Slider;

//	render() {
// 	const images = [
// 		{url: "./images/slider1.png"},
// 		{url: "./images/slider2.png"},
// 		{url: "./images/slider3.jpg"}
// ];

// return (
// 		<div>
// 				<SimpleImageSlider width={978} height={280} images={images} />
// 		</div>
// );
// }
