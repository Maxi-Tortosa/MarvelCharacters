import styled from 'styled-components';
import SearcherListElement from './SearcherListElement/index';
import { useContext } from 'react';
import { charactersContext } from '../../../Context/CharactersContext';

const SearcherList = ({ search, searchedCharacters }) => {
	const { focus } = useContext(charactersContext);

	console.log(focus);

	return (
		<>
			<Container>
				<ul className={focus ? 'searcherList' : 'hidden'}>
					{search && searchedCharacters && search.length >= 3
						? searchedCharacters.map((character) => (
								<SearcherListElement key={character.id} character={character} />
						  ))
						: null}

					{search.length === 1 || search.length === 2 ? (
						<p className='keepTyping'>Keep typing ...</p>
					) : null}
					{searchedCharacters &&
						search &&
						(search.length >= 3 && searchedCharacters.length === 0 ? (
							<p className='noResults'> No results! </p>
						) : null)}
				</ul>
			</Container>
		</>
	);
};

export default SearcherList;

const Container = styled.div`
	.searcherList {
		position: absolute;
		left: 8%;
		top: 42%;
		margin: 0;
		padding: 0;
		background-color: white;
		width: 85%;
	}
	.hidden {
		display: none;
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
