import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Header />
			</Router>
		</>
	);
}

export default App;
