import styled from 'styled-components';
import SearcherList from './SearcherList/index';
import { useContext, useState } from 'react';
import { charactersContext } from '../../Context/CharactersContext';

const Searcher = () => {
	const { search, setSearch, searchedCharacters, setFocus, chosenCharacter } =
		useContext(charactersContext);

	const handleFocus = (e) => {
		e.preventDefault();
		setFocus(true);
	};

	const handleBlur = (e) => {
		setTimeout(() => {
			e.preventDefault();
			setFocus(false);
		}, 50);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
		setFocus(true);
	};

	return (
		<Container>
			<input
				className='searcherInput'
				type='text'
				placeholder='Find your character'
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={chosenCharacter ? `${search}` : `${search}`}
			/>
			<SearcherList search={search} searchedCharacters={searchedCharacters} />
		</Container>
	);
};

export default Searcher;

const Container = styled.div`
	input {
		margin: 0 9% 9% 9%;
		font-size: 18pt;
		border: none;
		border-bottom: 1px solid black;
		width: 80%;
	}

	input:focus {
		outline: red solid 1px;
		
	}

	
	}
`;
