import axios from 'axios';
import _ from 'lodash';
import { ID, Film } from 'types/StarWarsItems';

export const SWAPI_BASE_URL = 'https://swapi.dev/api/';

export async function GetFilmsListAsync(): Promise<Film[]> {
  const response = await axios.get(SWAPI_BASE_URL + 'films');
  
  const baseUrlCharsToRemove = SWAPI_BASE_URL.length;
  const filmsList = response.data.results.map((item: any) => {
    const {
      url,
      episode_id,
      title,
      opening_crawl,
      director,
      producer,
      release_date,
      characters,
      planets,
      starships,
      vehicles,
      species,
    } = item;
    
    return {
      id: url.substring(baseUrlCharsToRemove - 1),
      type: 'Film',
      episodeId: episode_id,
      title: title,
      openingCrawl: opening_crawl,
      director: director,
      producer: producer,
      releaseDate: release_date,
      characters: characters.map((item: string) => item.substring(baseUrlCharsToRemove - 1)),
      planets: planets.map((item: string) => item.substring(baseUrlCharsToRemove - 1)),
      starships: starships.map((item: string) => item.substring(baseUrlCharsToRemove - 1)),
      vehicles: vehicles.map((item: string) => item.substring(baseUrlCharsToRemove - 1)),
      species: species.map((item: string) => item.substring(baseUrlCharsToRemove - 1)),
    }
  });

  return filmsList;

};
