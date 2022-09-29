import React from "react";
// import tv-movies from "../images/tv-movies.jpeg"

function OfferList() {
	return (
		<>
			<div className="demacator"></div>
			<div className="offer-item">
				<div className="offer-item-text">
					<h1>Enjoy on your TV.</h1>
					<p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
				</div>
				<div className="offer-item-pic">
					<img style={{ height: "350px", objectFit: "cover", width: "100%" }} src={require("../images/tv-movies.png")} alt="" />
				</div>
			</div>
			<div className="demacator"></div>
			<div className="offer-item">
				<div className="offer-item-pic">
					<img style={{ height: "350px", objectFit: "cover", width: "100%" }} src={require("../images/mobile-download.jpeg")} alt="" />
				</div>
				<div className="offer-item-text">
					<h1>Download your shows to watch offline.</h1>
					<p>Save your favorites easily and always have something to watch.</p>
				</div>
			</div>
			<div className="demacator"></div>
			<div className="offer-item">
				<div className="offer-item-text">
					<h1>Watch everywhere.</h1>
					<p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
				</div>
				<div className="offer-item-pic" style={{ backgroundColor: "black" }}></div>
			</div>
			<div className="demacator"></div>
			<div className="offer-item">
				<div className="offer-item-text">
					<h1>Create profiles for kids.</h1>
					<p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
				</div>
				<div className="offer-item-pic">
					<img style={{ height: "350px", objectFit: "cover", width: "100%" }} src={require("../images/kids-profile.png")} alt="" />
				</div>
			</div>
		</>
	);
}

export default OfferList;
