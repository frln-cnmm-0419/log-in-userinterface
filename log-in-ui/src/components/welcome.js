import React from "react";
import "../styling/global.scss";
import "../styling/welcome.scss"
import ReactDOM from "react-dom";
import google_icon from "../assets/google.png";
import faecbook_icon from "../assets/facebook.png";
import apple_icon from "../assets/apple.png";
import banner from "../assets/banner.jpg";
import { Switch, Route } from "react-router-dom";

const welcome = () => {
	return (
		<div className="welcome">
			<img src={banner} alt="banner" />
			<div className="title">
				<h1>Your all in one task organizer!</h1>
				<h6>Get started by logging in or signing up.</h6>
			</div>
			<div className="buttons">
				<button>Log In</button>
				<button>Create an Account</button>
			</div>
		</div>
	);
}

export default welcome;