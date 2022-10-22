import React from "react";
import "../styling/global.scss";
import "../styling/welcome.scss"
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";

const welcome = () => {
	return (
		<div className="welcome">
			<h1>Your all in one task organizer!</h1>
			<div className="buttons">
				<button>Log In</button>
				<button>Create an Account</button>
			</div>
		</div>
	);
}

export default welcome;