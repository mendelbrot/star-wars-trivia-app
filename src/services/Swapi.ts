import axios from 'axios';
import { URL, StarWarsItem, StarWarsType } from 'types/StarWarsTypes';
import { GetListReturnType } from 'types/SwapiTypes';

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

// to get the path to put into the api request from the item type
const apiPathsFromTypes = {
  Film: 'films/',
  Person: 'people/',
  Planet: 'planets/',
  Starship: 'starships/',
  Vehicle: 'vehicles/',
  Species: 'species/',
};

export async function getListAsync(itemType: StarWarsType, searchQuery?: string): Promise<GetListReturnType> {
  const path = apiPathsFromTypes[itemType as keyof typeof apiPathsFromTypes];
  let request = SWAPI_BASE_URL + path;
  
  if (searchQuery && (searchQuery.length != 0)) {
    request += '?search=' + searchQuery;
  };

  const response = await axios.get(request);
  response.data.results.forEach((item: any) => {
    item.type = itemType;
  });
  return response.data;
};

export async function getListByUrlAsync(itemType: StarWarsType, url: URL): Promise<GetListReturnType> {
  const response = await axios.get(url);
  response.data.results.forEach((item: any) => {
    item.type = itemType;
  });
  return response.data;
};

export async function getItemByUrlAsync(itemType: StarWarsType, url: URL): Promise<StarWarsItem> {
  const response = await axios.get(url);
  response.data.type = itemType;
  return response.data;
};