import React from 'react';
import Login from "./components/login"
import Signup from "./components/signup"
import Error from "./components/error"
import Welcome from './components/welcome'
import Dashboard from './coomponents/dashboard'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return  (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Error />} />
				<Route path="/dahsboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App