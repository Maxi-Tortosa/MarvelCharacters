import styled from 'styled-components';
import { useContext, useState } from 'react';
import { charactersContext } from '../../../../Context/CharactersContext';

const SearcherListElement = ({ character }) => {
	const { setChosenCharacter, setSearch } = useContext(charactersContext);

	const handleClick = (e) => {
		e.preventDefault();
		setChosenCharacter(character);
		setSearch(character.name);
	};

	return (
		<Container>
			<li>
				<button onClick={handleClick}>{character.name}</button>
			</li>
		</Container>
	);
};

export default SearcherListElement;

const Container = styled.div`

li {
	list-style-type: none;}
}


	button {
		background-color: white;
		border: none;
		cursor: pointer;
	}

	
`;
