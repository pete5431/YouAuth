import React from "react";
import loginImage from "../../login.svg";
import FaceCapture from "../../../node_modules/youauth/face_capture";
const axios = require("axios");

//Importing environment variables from .env
require("dotenv").config();
const envVars = process.env;
const { REACT_APP_REGROUTE } = envVars;

export class Register extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.testVideo = this.testVideo.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		let userData = {
			"fName": data.get("fName"),
			"lName": data.get("lName"),
			"email": data.get("email"),
			"password": data.get("password"),
			"confirm_password": data.get("confirm_password")
		};

		axios.post(REACT_APP_REGROUTE, userData).then(response => console.log(response)).catch(err => console.log(err));

	}

	// export function testFunction(){
	// 	this.
	// }

	testVideo(){
		console.log("testing video function");
		let constraints = {
			video: {
			width: 630,
			height: 500,
			}
		};

		var video = document.querySelector('video');
		//console.log(video);
		var imageBitmap;
		let faceCapture = new FaceCapture(constraints, video)
		faceCapture.startStream();
	}

	handleVideo(e){
		this.testVideo();
	}


	render() {
		return (
			<div className="base-container">
				<div className="header">Register</div>

				<div className="content">
					<div className="image">
						<img src={loginImage} alt="" />
					</div>

					<form className="form" onSubmit={this.handleSubmit}>

						<div className="form-group">
							<input type="text" name="fName" placeholder="First Name" />
						</div>
						<div className="form-group">
							<input type="text" name="lName" placeholder="Last Name" />
						</div>
						<div className="form-group">
							<input type="text" name="email" placeholder="Email" />
						</div>
						<div className="form-group">
							<input type="password" name="password" placeholder="Password" />
						</div>
						<div className="form-group">
							<input type="password" name="confirm_password" placeholder="Confirm Password" />
						</div>

						<button className="btn">Register</button>
					</form>
					<button onClick = {this.handleVideo.bind(this)}>Button video</button>
					<video ></video>
					
				</div>
			</div>
		);
	}
}
