import React from "react";

//import your own components
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Card } from "./component/card";

export function App() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>

			<div className="container">
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
