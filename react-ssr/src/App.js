import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const datee = new Date();

  // useEffect(() => {
  //   console.log("This is the current date: ", datee);
	// }, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
