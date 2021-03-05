import React from "react";

//import your own components
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Cards } from "./component/card";
import { Footer } from "./component/footer";

const carta = {
	image: "http://placehold.it/500x325.jpg",
	title: "Hello Rigo",
	description: "lorem ipsum.........",
	url: "http://wikipedia.com",
	button: "click here"
};

export function App() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>

			<div className="container">
				<div className="row">
					<Cards card={carta} />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
