import styled from 'styled-components';
import SearcherList from './SearcherList/index';
import { useContext, useState } from 'react';
import { charactersContext } from '../../Context/CharactersContext';

const Searcher = () => {
	const {
		characters,
		search,
		setSearch,
		setSearchedCharacters,
		valueCounter,
		setValueCounter,
	} = useContext(charactersContext);

	const handleChange = (e) => {
		setValueCounter(e.target.value.length);
		if (e.target.value.length >= 3) {
			setSearch(e.target.value);
		} else if (e.target.value.length === 1 || e.target.value.length === 2) {
			setSearch('');
		}
	};

	console.log(search);

	return (
		<Container>
			<input
				className='searcherInput'
				type='text'
				placeholder='Find your character'
				onChange={handleChange}
			/>
			{/* {ChosenCharacterTrue ? <p>{characters.length} results </p>: characters && <p>{characters.length} results </p>} */}

			<SearcherList search={search} valueCounter={valueCounter} />
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
