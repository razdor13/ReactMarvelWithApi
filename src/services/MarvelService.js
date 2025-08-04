import { useHttp } from "../hooks/http.hooks"


const useMarvelService = () => {
	const {loading, request, error, clearError} = useHttp();

	// const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	// const _apikey = 'apikey=10877f709e567804be49abd6a4c6cbcd';
	// const _baseOffset = 210;

	const _apiBase = 'https://marvel-server-zeta.vercel.app/';
	const _apikey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';
	const _baseOffset = 0;

	const getAllComics = async(offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apikey}`
		);
		return res.data.results.map(_transformComics);
	}

	const getAllCharacters = async(offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}characters?limit=9&offset=${offset}&${_apikey}`
		);
		return res.data.results.map(_transformCharacter);
	}

	const getCharacterByName = async(name) => {
		const res = await request (
			`${_apiBase}characters?name=${name}&${_apikey}`
		);
		return res.data.results.map(_transformCharacter);
	}

	const getCharacter = async (id) => {
		const res =  await request(
			`${_apiBase}characters/${id}?${_apikey}`
		);
		return _transformCharacter(res.data.results[0]);
	}

	const getComic = async (id) => {
		const res = await request(
			`${_apiBase}comics/${id}?${_apikey}`
		)
		return _transformComics(res.data.results[0]);
	}

	const _transformCharacter = (char) => {
		// let str = char.description;
		// if (str.length > 100) {
		// 	str = str.slice(0, 220)+"...";
		// }
		// if (str.length === 0) {
		// 	str = 'Description is not available for this character'
		// }
		return {
			id: char.id,
			name: char.name,
			description: char.description ? char.description.length > 200 ? char.description.slice (0, 200) +"..." :  char.description:  'Description is not available for this character',
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items
		}
	}

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};
	return {
		loading, 
		error, 
		clearError,
		getAllCharacters, 
		getCharacter, 
		getCharacterByName, 
		getAllComics,
		getComic
	}
}



export default useMarvelService
