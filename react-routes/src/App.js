import {
	BrowserRouter as Router,
	Routes,
	Route
}	from "react-router-dom"

import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { About } from "./pages/about"

function App() {
  return (
	<Router>
	  <Routes>
		<Route path="/" element={ <Home />} />
		<Route path="/login" element={ <Login /> }/>
		<Route path="/about" element={ <About /> }/>
	  </Routes>
	</Router>
  );
}

export default App;
