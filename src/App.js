import React from "react";
import Welcome from "./components/Welcome";
import login from "./components/login";
import error from "./components/error";
import './styling/global.scss';
import { BrowserRouter as Routes, Router, Route } from "react-router-dom";


function App() {
  return  (
		<div className="App">
			<Welcome />
		</div>
	);
}

export default App;