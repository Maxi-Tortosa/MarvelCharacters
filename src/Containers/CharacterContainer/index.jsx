import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getCharacters } from '../../Api/index';
import Character from '../../Components/Character/index';

const CharacterContainer = () => {
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage, setCharactersPerPage] = useState(5);

	useEffect(() => {
		getCharacters()
			.then((characters) => {
				setCharacters(characters);
			})
			.finally(() => {});
	}, []);
	// console.log(characters);

	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	const currentCharaters = characters.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	);

	return (
		<>
			<Container>
				{currentCharaters.map((character) => {
					return <Character key={character.id} character={character} />;
				})}
				<button>Anterior</button>
				<button>Siguiente</button>
			</Container>
		</>
	);
};

export default CharacterContainer;

const Container = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-evenly;
`;
