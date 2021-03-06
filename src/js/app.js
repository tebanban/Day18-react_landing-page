import React from "react";

//import your own components
import { Navbar } from "./component/navbar";
import { Jumbotron } from "./component/jumbotron";
import { Cards } from "./component/card";
import { Footer } from "./component/footer";

const carta = {
	image: "https://placekitten.com/g/70/50",
	title: "A Kitten",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	url: "https://en.wikipedia.org/wiki/Kitten",
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
					<div className="col-md-3">
						<Cards card={carta} />
					</div>
					<div className="col-md-3">
						<Cards card={carta} />
					</div>
					<div className="col-md-3">
						<Cards card={carta} />
					</div>

					<div className="col-md-3">
						<Cards card={carta} />
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
