import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/error";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return  (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;