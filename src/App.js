import './App.css';

import Footer from './components/Footer/footerWeather';
import Linerundom from './components/LineRundom/Linerundom';
import Header from './components/header/header';

function App() {
	return (
		<div className="App">
			<Header />

			<Linerundom />

			<Footer />
		</div>
  );
}

export default App;
