import React from "react";
import "../styling/global.scss";
import "../styling/welcome.scss"
import { Link } from "react-router-dom"
import logo from "../assets/logo.webp"

const Welcome = () => {
	return (
		<div className="welcome">
			<img src={logo} alt="banner" />
			<div className="title">
				<h1>Your all in one task organizer!</h1>
				<h6>Get started by logging in or signing up.</h6>
			</div>
			<div className="buttons">
				<Link to='/login' className="login-btn">Log In</Link>
				<Link to='/signup' className="signup-btn">Create an Account</Link>
			</div>
		</div>
	);
}

export default Welcome;