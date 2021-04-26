// the ID is the last two parts of the api path parameters, eg: 'films/2'
export type ID = string;

export const StarWarsItemMeta = {
  Film: {
    listTitleAttribute: 'title',
    detailsAttributes: [
      { name: 'episodeId', label: 'Episode ID' },
      { name: 'title', label: 'Title' },
      { name: 'openingCrawl', label: 'Opening Crawl' },
      { name: 'director', label: 'Director' },
      { name: 'producer', label: 'Producer' },
      { name: 'releaseDate', label: 'Release Date' },
    ],
    detailsReferenceAttributes: [
      { name: 'characters', label: 'Characters', type: 'Person' },
      { name: 'planets', label: 'Planets', type: 'Planet' },
      { name: 'starships', label: 'Starships', type: 'Starship' },
      { name: 'vehicles', label: 'Vehicles', type: 'Vehicle' },
      { name: 'species', label: 'Species', type: 'Species' },
    ],
  },
  Person: {
    listTitleAttribute: 'title',
    detailsAttributes: [
      { name: 'episodeId', label: 'Episode ID' },
    ],
    detailsReferenceAttributes: [
      { name: 'characters', label: 'Characters', type: 'Person' },
    ],
  },
  Planet: {
    listTitleAttribute: 'title',
    detailsAttributes: [
      { name: 'episodeId', label: 'Episode ID' },
    ],
    detailsReferenceAttributes: [
      { name: 'characters', label: 'Characters', type: 'Person' },
    ],
  },
  Starship: {
    listTitleAttribute: 'title',
    detailsAttributes: [
      { name: 'episodeId', label: 'Episode ID' },
    ],
    detailsReferenceAttributes: [
      { name: 'characters', label: 'Characters', type: 'Person' },
    ],
  },
  Vehicle: {
    listTitleAttribute: 'title',
    detailsAttributes: [
      { name: 'episodeId', label: 'Episode ID' },
    ],
    detailsReferenceAttributes: [
      { name: 'characters', label: 'Characters', type: 'Person' },
    ],
  },
  Species: {
    listTitleAttribute: 'title',
    detailsAttributes: [
      { name: 'episodeId', label: 'Episode ID' },
    ],
    detailsReferenceAttributes: [
      { name: 'characters', label: 'Characters', type: 'Person' },
    ],
  },
};

export type StarWarsType = keyof typeof StarWarsItemMeta;

export type DetailsReferenceMetaType = {
  name: 'string',
  label: 'string',
  type: StarWarsType
};

export type Film = {
  id: ID,
  type: StarWarsType,
  episodeId: string,
  title: string,
  openingCrawl: string,
  director: string,
  producer: string,
  releaseDate: string,
  characters: Array<ID>,
  planets: Array<ID>,
  starships: Array<ID>,
  vehicles: Array<ID>,
  species: Array<ID>,
};

export type Planet = {
  id: ID,
  type: StarWarsType,
  name: string,
  rotationPeriod: string,
  orbitalPeriod: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surfaceWater: string,
  population: string,
  residents: Array<ID>
  films: Array<ID>
};

export type StarWarsItem = Film | Planet;