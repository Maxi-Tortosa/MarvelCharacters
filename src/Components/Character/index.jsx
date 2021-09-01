import styled from 'styled-components';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { charactersContext } from '../../Context/CharactersContext';

const Character = ({ character }) => {
	const { id, name, thumbnail } = character;
	const { favorites, removeFavoriteHero, addFavoriteHero } =
		useContext(charactersContext);

	/*PENSARLO CON UN ESTADO */
	const isFavorite = (character) => {
		const isAlreadyFavorite = favorites.some(
			(heroe) => heroe.id === character.id
		);

		return isAlreadyFavorite ? (
			<button className='fas' onClick={() => removeFavoriteHero(character.id)}>
				favSi
			</button>
		) : (
			<button className='far' onClick={() => addFavoriteHero(character)}>
				favNo
			</button>
		);
	};

	return (
		<>
			<Card>
				<Link id={id} to={`/character/${name}`}>
					<div className='card__thumb'>
						<img
							src={thumbnail.path + '.' + thumbnail.extension}
							alt='characterImage'
						/>
					</div>
				</Link>
				<div className='card__body'>
					<p>{name}</p>
				</div>

				{isFavorite(character)}
			</Card>
		</>
	);
};

export default Character;
const Card = styled.div`
	width: 140px;
	display: grid;
	margin: 10% 0;

	.card__thumb {
		height: 210px;
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	.card__body {
		height: 75px;
		padding: 10px;
		background-color: rgba(21, 21, 21, 1);
		p {
			color: whitesmoke;
			margin: 0;
			padding: 2%;
			font-size: 14pt;
		}
	}
`;
