import { createContext, useState, useEffect } from 'react';
import { getCharacters } from '../Api/index';

export const charactersContext = createContext();

const CharactersContext = ({ children }) => {
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState();

	useEffect(() => {
		getCharacters()
			.then((characters) => {
				setCharacters(characters);
			})
			.finally(() => {});
	}, []);

	return (
		<charactersContext.Provider value={{ characters }}>
			{children}
		</charactersContext.Provider>
	);
};

export default CharactersContext;
