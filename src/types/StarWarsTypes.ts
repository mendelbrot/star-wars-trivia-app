export type StarWarsType =
  'Film' |
  'Person' |
  'Planet' |
  'Starship' |
  'Vehicle' |
  'Species';

export type URL = string;

// the star wars items used by the frontend components, returned by the SWAPI service functions

export type StarWarsItem = {
  url: URL,
  type: StarWarsType,
  [key: string]: string | URL | URL[]
};
