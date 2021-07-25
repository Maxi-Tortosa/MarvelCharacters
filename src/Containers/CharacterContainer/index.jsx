import styled from 'styled-components';
import { useState, useContext } from 'react';
import Character from '../../Components/Character/index';
import Pagination from '../../Components/Pagination';
import Searcher from '../../Components/Searcher/index';
import { charactersContext } from '../../Context/CharactersContext';

const CharacterContainer = () => {
	const { characters, isLoading } = useContext(charactersContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [charactersPerPage, setCharactersPerPage] = useState(10);

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
				<div className='div1'>
					<p>MARVEL CHARACTERS LIST</p>
				</div>

				<Searcher />
				{characters && (
					<div className='results'>
						<p>{characters.length} results </p>{' '}
					</div>
				)}
				<div className='div3'>
					{currentCharacters.map((character) => {
						return <Character key={character.id} character={character} />;
					})}
					{isLoading && (
						<div className='loading'>
							<p>Loading</p>
						</div>
					)}
				</div>
				<Pagination
					charactersPerPage={charactersPerPage}
					totalCharacters={characters.length}
					paginate={paginate}
					changePage={changePage}
					currentPage={currentPage}
				/>
			</Container>
		</>
	);
};

export default CharacterContainer;

const Container = styled.div`
	.div1 {
		margin 9%; 
		p {font-size:18pt;}
	}
	.div2{}

	.results { margin: 0 9% 0 9%}

	.div3 {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-evenly;
	}
`;
