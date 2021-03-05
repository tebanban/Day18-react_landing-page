import React from "react";

//import your own components
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Cards } from "./component/card";
import { Footer } from "./component/footer";

const carta = {
	image: "https://placekitten.com/g/70/50",
	title: "A Kitten",
	description: "lorem ipsum.........",
	url: "http://wikipedia.com",
	button: "click me"
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
					<Cards card={carta} />
					<Cards card={carta} />
					<Cards card={carta} />
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
