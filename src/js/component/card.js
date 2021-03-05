import React from "react";

export function Card() {
	return (
		<div className="card" style={{ width: "14rem" }}>
			<img
				className="card-img-top"
				src="https://placekitten.com/g/90/90"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
