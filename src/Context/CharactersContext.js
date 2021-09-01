import { createContext, useState, useEffect } from 'react';
import { getCharacters } from '../Api/index';

export const charactersContext = createContext();

const CharactersContext = ({ children }) => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [search, setSearch] = useState([]);
	const [searchedCharacters, setSearchedCharacters] = useState();
	const [chosenCharacter, setChosenCharacter] = useState(null);
	const [focus, setFocus] = useState(false);
	const [favorites, setFavorites] = useState([]);

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
		if (search.length >= 3) {
			getCharacters(search).then((characters) => {
				setSearchedCharacters(characters);
			});
		} else if (search.length === 1 || search.length === 2) {
			setSearchedCharacters(undefined);
		} else {
			setSearchedCharacters([]);
		}
	}, [search]);

	/* Favorites*/

	const addFavoriteHero = (newHero) => {
		setFavorites((prevHeroes) => [...prevHeroes, newHero]);
	};

	const removeFavoriteHero = (idHero) => {
		setFavorites((prevHeroes) =>
			prevHeroes.filter((hero) => hero.id !== idHero)
		);
	};

	if (favorites.length === 0) {
		localStorage.clear();
	} else {
		localStorage.setItem('favorite', JSON.stringify(favorites));
	}

	return (
		<charactersContext.Provider
			value={{
				characters,
				isLoading,
				search,
				setSearch,
				searchedCharacters,
				setSearchedCharacters,
				chosenCharacter,
				setChosenCharacter,
				focus,
				setFocus,
				favorites,
				setFavorites,
				addFavoriteHero,
				removeFavoriteHero,
			}}>
			{children}
		</charactersContext.Provider>
	);
};

export default CharactersContext;
