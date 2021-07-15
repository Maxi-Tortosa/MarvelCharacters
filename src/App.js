import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CharacterContainer from './Containers/CharacterContainer/index';

function App() {
	return (
		<>
			<Router>
				<Header />
				<CharacterContainer />
				<Footer />
			</Router>
		</>
	);
}

export default App;
