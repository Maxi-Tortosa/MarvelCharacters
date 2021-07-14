import axios from 'axios';
const pukey = '87a602d18a71b6a9fbb209fe24ad4544';
const hash = '19c7cd4b1c709529fd9ac46322673af2';
export const getCharacters = async (query) => {
	try {
		const result = await axios.get(
			`https://gateway.marvel.com/v1/public/characters?${
				query ? `nameStartsWith=${query}&` : ''
			}orderBy=name&ts=1&apikey=${pukey}&hash=${hash}`
		);
		return result?.data?.data?.results;
	} catch (error) {
		console.log(error);
	}
};
