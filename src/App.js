import React from "react";
import welcome from "./components/Welcome";
import login from "./components/login";
import error from "./components/error";
import './styling/global.scss';
import './styling/app.scss';
import { BrowserRouter as Routes, Router, Route } from "react-router-dom";


function App() {
  return  (
		<div className="App">
			<Router>
				<Routes>
				  <Route path="/" component={<welcome />}/>
				  <Route path="/login" component={<login />}/>
				  <Route path="*" component={<error />}/>
			  </Routes>
			</Router>
		</div>
	);
}

export default App;