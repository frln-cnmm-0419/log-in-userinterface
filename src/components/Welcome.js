import React from "react";
import "../styling/global.scss";
import "../styling/welcome.scss"
import ReactDOM from "react-dom";
import google_icon from "../assets/google.png";
import faecbook_icon from "../assets/facebook.png";
import apple_icon from "../assets/apple.png";
import banner from "../assets/banner.jpg";
import login from "./login"
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Routes, Router, Route, Link } from "react-router-dom";

const Welcome = () => {
	const navigate = useNavigate();
	return (
		<div className="welcome">
			<img src={banner} alt="banner" />
			<div className="title">
				<h1>Your all in one task organizer!</h1>
				<h6>Get started by logging in or signing up.</h6>
			</div>
			<div className="buttons">
				<button onClick={() => navigate("/login")} className="login-btn">Log In</button>
				<button className="signup-btn">Create an Account</button>
			</div>
		</div>
	);
}

export default Welcome;