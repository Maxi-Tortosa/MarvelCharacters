import styled from 'styled-components';
import { useContext, useState } from 'react';
import { charactersContext } from '../../../Context/CharactersContext';

const SearcherList = ({ search, valueCounter }) => {
	const { searchedCharacters } = useContext(charactersContext);

	console.log(searchedCharacters);

	return (
		<>
			<Container>
				<ul className='searcherList'>
					{search && searchedCharacters && valueCounter >= 3
						? searchedCharacters.map((characters) => (
								<li key={characters.id}>
									<button>{characters.name}</button>
								</li>
						  ))
						: null}

					{valueCounter === 1 || valueCounter === 2 ? (
						<p className='keepTyping'>Keep typing ...</p>
					) : searchedCharacters &&
					  valueCounter >= 3 &&
					  searchedCharacters.length === 0 ? (
						<p className='noResults'> No results! </p>
					) : null}
				</ul>
			</Container>
		</>
	);
};

export default SearcherList;

const Container = styled.div`
	ul {
		position: absolute;
		left: 8%;
		top: 42%;
		margin: 0;
		padding: 0;
		background-color: white;
		width: 85%;
	}

	li {
		list-style-type: none;
	}

	button {
		background-color: white;
		border: none;
		cursor: pointer;
	}

	.keepTyping {
		width: 85%;
		margin: 16px 16px 16px 2%;
	}

	.noResults {
		width: 85%;
		margin: 16px 16px 16px 2%;
	}
`;
