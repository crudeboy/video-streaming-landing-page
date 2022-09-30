import React from "react";

function Header() {
	return (
		<>
			<header>
				<img style={{width: "200px", height: "40px"}}src={require("../images/Flixia-logo.png")} alt="" />
				<i>Heavy Metal Movies</i>
			</header>
		</>
	);
}

export default Header;
