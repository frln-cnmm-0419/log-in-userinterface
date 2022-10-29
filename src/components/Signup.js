import React from "react";
import "./../styling/signup.scss";
const Signup = () => {
	return (
		<div className="Signup">
			<h1>Sign Up</h1>
			<h4>Please Sign Up to Continue</h4>
			<form className="Signup-form">
			  <input type="text" placeholder="First Name" />
			  <input type="text" placeholder="Last Name" />
			  <input type="text" placeholder="Email" />
        <input type="date" placeholder="Birth Date" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
				<div className="note">
				  <input type="checkbox" />
          <h4>By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></h4>
				</div>
        <button type="submit">Sign Up</button>
			</form>
    </div>
	);
}
			
export default Signup;