import { useHttp } from "../hooks/http.hooks"


const  useMarvelService = () => {

    const {loading,request,error,clearError} = useHttp()


    const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    const _apiComics = 'https://gateway.marvel.com:443/v1/public/comics?limit=8'
    const _apiKey = 'apikey=f39d2a04760f161b2abf7c8817a46165'
    const _baseOffset = 210
    
    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getComics = async () => {
        const res = await request(`${_apiBase}comics?limit=8&offset=200&${_apiKey}`)
        return res.data.results.map(_transformComics)
    }
    
    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    const _transformComics = (comics) => {
        return {
            id :comics.id,
            name :comics.series.name,
            thumbnail : comics.thumbnail.path + '.jpg'
        }
    }
    return  {loading,error,getAllCharacters,getCharacter,clearError,getComics}
}



export default useMarvelService