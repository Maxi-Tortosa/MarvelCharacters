import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CharacterContainer from './Containers/CharacterContainer/index';
import CharactersContext from './Context/CharactersContext';
import CharacterDetailContainer from './Containers/CharacterDetailContainer/index';

function App() {
	return (
		<>
			<Router>
				<Header />
				<CharactersContext>
					<Switch>
						<Route exact path='/'>
							<CharacterContainer />
						</Route>
						<Route exact path='/character/:name'>
							<CharacterDetailContainer />
						</Route>
					</Switch>
				</CharactersContext>
				<Footer />
			</Router>
		</>
	);
}

export default App;
