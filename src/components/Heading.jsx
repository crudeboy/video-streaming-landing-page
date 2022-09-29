import React from "react";
import Header from "./Header";

function Heading() {
	return (
		<>
			<div className="header-container">
				<Header />
				<div className="heading-text-container">
					<h1>Unlimited movies, TV shows, and more.</h1>
					<p>Watch anywhere. Cancel anytime.</p>
					<p>Ready to watch? Enter your email to create or restart your membership.</p>
				</div>
				<div className="sign-up">
					<input className="input-element" type="text" name="fruit" placeholder="Enter your email" />
					<input className="input-element" type="text" name="fruit" placeholder="Enter your password" />
					<button type="submit">Submit</button>
				</div>
			</div>
		</>
	);
}

export default Heading;
