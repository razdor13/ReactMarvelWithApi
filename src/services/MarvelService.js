class MarvelService {
    _apibase = 'https://gateway.marvel.com:443/v1/public/'
    _apikey = 'apikey=64edc5943517781106564a6ac5e58cbd'
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apibase}characters?limit=9&offset=210&${this._apikey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
         
        const res = await this.getResource(`${this._apibase}characters/${id}?${this._apikey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            // реалізація виведення дескріпшена з обмеженою кількістью символів,або 
            // якщо сервер дав undefined то буде вивидене повідомлення про відсутність 
            // 
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}



export default MarvelService