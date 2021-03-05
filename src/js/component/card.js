import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		<div className="card" style={{ width: "14rem" }}>
			<img
				className="card-img-top"
				src={props.card.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.card.title}</h5>
				<p className="card-text">{props.card.description}</p>
				<a href={props.card.url} className="btn btn-primary">
					{props.card.button}
				</a>
			</div>
		</div>
	);
}

Cards.propTypes = {
	card: {
		image: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
		button: PropTypes.string
	}
};
