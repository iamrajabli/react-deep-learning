export default class MarvelServices {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=bc0cfbc6138a38d065994132514104f0';
    _baseOffset = 210;

    getResources = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResources(`${this._apiBase}/characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(char => this._transformCharacter(char))
    }

    getCharacter = async (id) => {
        const res = await this.getResources(`${this._apiBase}/characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: (char.description) ? `${char.description.slice(0, 210)}...` : "There is no information about this hero. He's just a hero...",
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

