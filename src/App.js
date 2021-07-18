import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CharacterContainer from './Containers/CharacterContainer/index';
import CharactersContext from './Context/CharactersContext';

function App() {
	return (
		<>
			<Router>
				<Header />
				<CharactersContext>
					<CharacterContainer />
				</CharactersContext>
				<Footer />
			</Router>
		</>
	);
}

export default App;
