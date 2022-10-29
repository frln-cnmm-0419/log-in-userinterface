import React from "react";
import "../styling/login.scss"
import "../styling/global.scss"
import google_icon from "../assets/google.png"
import facebook_icon from "../assets/facebook.png"
import apple_icon from "../assets/apple.png"
import banner from "../assets/banner.jpg"
import { Link } from "react-router-dom"


const Login = () => {
	return (
	<div className="login">
		<img src={banner} alt="banner" />
    <h1>Login to Continue</h1>
		<div className="login-form">
		  <form>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit" className="login-button">Login</button>
				<Link to="/signup" className="c-acc">Create Account</Link>
			</form>
			<h1>-Or-</h1>
			<div className="third-party">
        <button className="google-btn"><img src={google_icon} alt="google-icon" />Continue using Google</button>
				<button className="facebook-btn"><img src={facebook_icon} alt="facebook-icon" />Continue using Facebook</button>
				<button className="apple-btn"><img src={apple_icon} alt="apple-icon" />Continue using Apple</button>
			</div>
		</div>
	</div>
	);
}

export default Login;