import { createContext, useState, useEffect } from 'react';
import { getCharacters } from '../Api/index';

export const charactersContext = createContext();

const CharactersContext = ({ children }) => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [search, setSearch] = useState();
	const [searchedCharacters, setSearchedCharacters] = useState([]);
	const [valueCounter, setValueCounter] = useState();

	/* Character Container */

	useEffect(() => {
		getCharacters()
			.then((characters) => {
				setCharacters(characters);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	/* Searcher List */

	useEffect(() => {
		getCharacters(search).then((characters) => {
			setSearchedCharacters(characters);
		});
	}, [search]);

	return (
		<charactersContext.Provider
			value={{
				characters,
				isLoading,
				search,
				setSearch,
				searchedCharacters,
				setSearchedCharacters,
				valueCounter,
				setValueCounter,
			}}>
			{children}
		</charactersContext.Provider>
	);
};

export default CharactersContext;
