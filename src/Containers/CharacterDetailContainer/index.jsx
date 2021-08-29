import styled from 'styled-components';
import CharacterDetail from '../../Components/CharacterDetail';
import { getCharacters } from '../../Api/index';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetailContainer = () => {
	const [characterDetail, setCharacterDetail] = useState(null);

	const { name } = useParams();

	useEffect(() => {
		getCharacters(name).then((characters) => {
			setCharacterDetail(
				characters.find((character) => character.name === name)
			);
		});
	}, [name]);

	return (
		<>
			<Container>
				{characterDetail ? (
					<CharacterDetail character={characterDetail} />
				) : (
					<p className='loading'>Loading...</p>
				)}
			</Container>
			;
		</>
	);
};

export default CharacterDetailContainer;

const Container = styled.div`
	.loading {
	}
`;
