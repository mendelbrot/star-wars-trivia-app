import axios from 'axios';
import _ from 'lodash';
import { ID, StarWarsItem, StarWarsItemType } from 'types/StarWarsTypes';
import StarWarsViewModel from 'models/StarWarsViewModel';
import { GetListReturnType } from 'types/SWAPITypes';

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

// for results that link to another item, the base url gets stripped off
const baseUrlCharsToRemove = SWAPI_BASE_URL.length;

// to get the path to put into the api request from the item type
const apiPathsFromTypes = {
  Film: 'films/',
  Person: 'people/',
  Planet: 'planets/',
  Starship: 'starships/',
  Vehicle: 'vehicles/',
  Species: 'species/',
}

function processApiDataItem(item: any, itemType: StarWarsItemType): StarWarsItem {
  const {
    url,
  } = item;

  const returnItem = {
    id: url.substring(baseUrlCharsToRemove - 1) as ID,
    type: itemType,
  };

  const {
    detailsAttributes,
    detailsReferenceSingle,
    detailsReferenceList
  } = StarWarsViewModel[itemType];

  detailsAttributes.forEach(({ key }) => {
    returnItem[key as keyof typeof returnItem] = item[key];
  });
  detailsReferenceSingle.forEach(({ key }) => {
    returnItem[key as keyof typeof returnItem] =
      item[key].substring(baseUrlCharsToRemove - 1);
  });
  detailsReferenceList.forEach(({ key }) => {
    returnItem[key as keyof typeof returnItem] = item[key].map(() => {
      return item[key].substring(baseUrlCharsToRemove - 1);
    });
  });

  return returnItem as StarWarsItem;
}

export async function getListAsync(itemType: StarWarsItemType, pageQuery?: number): Promise<GetListReturnType> {
  const path = apiPathsFromTypes[itemType as keyof typeof apiPathsFromTypes];
  let request = SWAPI_BASE_URL + path;
  if (pageQuery) {
    request += '?page=' + pageQuery;
  };
  const response = await axios.get(request);

  const { count, next, previous, results } = response.data;

  let page = null;

  // infer the page from previous and next
  if (next) {
    page = parseInt(next.split('=')[-1]) - 1;
  } else if (previous) {
    page = parseInt(previous.split('=')[-1]) + 1;
  };
  
  const itemsList = results.map((item: any) => processApiDataItem(item, itemType));
  
  return {
    count,
    page,
    results: itemsList
  };
};