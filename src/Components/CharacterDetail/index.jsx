import styled from 'styled-components';
import { useState, useContext } from 'react';
import { charactersContext } from '../../Context/CharactersContext';

export const CharacterDetail = ({ character }) => {
	const {
		// chosenCharacter,
		isLoading,
		search,
		setSearch,
		searchedCharacters,
		setSearchedCharacters,
	} = useContext(charactersContext);
	const { name, thumbnail, description } = character;

	return (
		<Container>
			<div className='div1'>
				<img
					src={thumbnail.path + '.' + thumbnail.extension}
					alt='Ironman character'
				/>
			</div>
			<div className='div2'>
				<h3 className='name'>{name}</h3>
			</div>
			<div className='div3'>
				<h4> Description</h4>
				{description ? (
					<p> {description} </p>
				) : description === '' ? (
					<p>Sorry, description not found...</p>
				) : null}
			</div>
		</Container>
	);
};

export default CharacterDetail;

const Container = styled.div`
	.div1 {
		height: 400px;
		padding: 12% 17% 0 17%;
		background-color: rgba(21, 21, 21, 1);
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.div2 {
		padding: 10% 10% 0 10%;
		background-color: rgba(21, 21, 21, 1);
		.name {
			font-weight: 500;
			font-size: 18pt;
			margin: 0;
			color: white;
		}
	}

	.div3 {
		margin: 10%;

		h4 {
			font-size: 15pt;
		}
	}
`;
