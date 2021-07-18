import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getCharacters } from '../../Api/index';
import Character from '../../Components/Character/index';
import Pagination from '../../Components/Pagination';

const CharacterContainer = () => {
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage, setCharactersPerPage] = useState(6);

	useEffect(() => {
		getCharacters()
			.then((characters) => {
				setCharacters(characters);
			})
			.finally(() => {});
	}, []);

	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	const currentCharaters = characters.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	);
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	/*ver de darle un estilo a la current*/
	/*Tener en cuenta que no quede vacío cuando hago next page, ver de solucionarlo con alguna función de indexOf*/

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
				{currentCharaters.map((character) => {
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
