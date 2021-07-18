import styled from 'styled-components';

// import { Link } from 'react-router-dom';

const Character = ({ character }) => {
	const { id, name, thumbnail } = character;

	return (
		<>
			<Card>
				<div className='card__thumb'>
					<img
						src={thumbnail.path + '.' + thumbnail.extension}
						alt='characterImage'
					/>
				</div>
				<div className='card__body'>
					<p>{name}</p>
				</div>
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
