import styled from 'styled-components';
import { useState, useContext } from 'react';
import Character from '../../Components/Character/index';
import Pagination from '../../Components/Pagination';
import { charactersContext } from '../../Context/CharactersContext';

const CharacterContainer = () => {
	const { characters } = useContext(charactersContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage, setCharactersPerPage] = useState(6);

	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	const currentCharacters = characters.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	);
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const changePage = (e) => {
		if (e.target.className === '1') {
			setCurrentPage(currentPage - 1);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};
	return (
		<>
			<Container>
				{currentCharacters.map((character) => {
					return <Character key={character.id} character={character} />;
				})}
			</Container>
			<Pagination
				charactersPerPage={charactersPerPage}
				totalCharacters={characters.length}
				paginate={paginate}
				changePage={changePage}
				currentPage={currentPage}
			/>
		</>
	);
};

export default CharacterContainer;

const Container = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-evenly;
`;
