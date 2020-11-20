import React from "react";
// import SimpleImageSlider from "react-simple-image-slider";
import ImageSlider from "ac-react-simple-image-slider";

class Slider extends React.Component{
	render() {
			const images = [
					{src: "/slider1.png"},
					{src: "/slider2.png"},
					{src: "/slider3.jpg"}
			];

			return (
					<div>
							<ImageSlider height='978x' width='480px' data={images} autoPlay='true'/>
					</div>
			);
	}
}

export default Slider;
