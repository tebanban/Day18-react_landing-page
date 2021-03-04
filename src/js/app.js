import React from "react";

//import your own components
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";

export function App() {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
		</div>
	);
}
