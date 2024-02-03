class MarvelService {
    #apibase = 'https://gateway.marvel.com:443/v1/public/'
    #apikey = 'apikey=64edc5943517781106564a6ac5e58cbd'
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getALLCharacters = () => {
        return this.getResource(`${this.#apibase}characters?limit=9&offset=210&${this.#apikey}`);
    }
    getCharacter = (id) => {
        return this.getResource(`${this.#apibase}characters/${id}?${this.#apikey}`);
    }
}



export default MarvelService