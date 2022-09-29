import Heading from "./components/Heading";
import OfferList from "./components/OfferList";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div>
				<Heading className="header" />
				<OfferList />
				<Footer />
			</div>
		</>
	);
}

export default App;
