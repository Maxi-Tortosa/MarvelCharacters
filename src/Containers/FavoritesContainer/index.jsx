import styled from 'styled-components';
import { useState, useContext } from 'react';
import { charactersContext } from '../../Context/CharactersContext';

const FavoritesContainer = () => {
	const { removeFavoriteHero } = useContext(charactersContext);

	const favoriteJSON = localStorage.getItem('favorite');
	const favoritesList = JSON.parse(favoriteJSON);

	console.log(favoritesList);

	return (
		<Container>
			{favoritesList ? (
				favoritesList.map((character) => (
					<div className='favorite'>
						<div>
							{' '}
							<img
								className='favorite__thumb'
								src={
									character.thumbnail.path + '.' + character.thumbnail.extension
								}
								alt='characterImage'
							/>
						</div>
						<div>
							<p className='favorite__name'>{character.name}</p>
							<p className='favorite__comics'>
								{' '}
								Comics available: {character.comics.items.length}
							</p>
						</div>
						<button onClick={() => removeFavoriteHero(character.id)}>X</button>
					</div>
				))
			) : (
				<p>No favorites yet</p>
			)}
		</Container>
	);
};

export default FavoritesContainer;

const Container = styled.div`
	.favorite {
		display: grid;
		grid-template-columns: auto auto auto;
	}

	.favorite__comics {
	}
	.favorite__name {
	}
	.favorite__thumb {
		width: 80px;
	}
`;
