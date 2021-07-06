import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Footer />
			</Router>
		</>
	);
}

export default App;
