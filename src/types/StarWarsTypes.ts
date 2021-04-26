// The Star Wars types specifying the form of the api data as used by the front end

export type FilmItemType = 'Film';
export type PersonItemType = 'Person';
export type PlanetItemType = 'Planet';
export type StarshipItemType = 'Starship';
export type VehicleItemType = 'Vehicle';
export type SpeciesItemType = 'Species';

export type StarWarsItemType =
  FilmItemType |
  PersonItemType |
  PlanetItemType |
  StarshipItemType |
  VehicleItemType |
  SpeciesItemType;

// the ID is the last two parts of the api path parameters, eg: 'films/2'
export type ID = string;

export type Film = {
  id: ID,
  type: FilmItemType,
  episode_id: string,
  title: string,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  characters: ID[],
  planets: ID[],
  starships: ID[],
  vehicles: ID[],
  species: ID[],
};

export type Person = {
  id: ID,
  type: PersonItemType,
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: ID,
  films: ID[],
  species: ID[],
  vehicles: ID[],
  starships: ID[],
};

export type Planet = {
  id: ID,
  type: PlanetItemType,
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: ID[]
  films: ID[]
};

export type Starship = {
  id: ID,
  type: StarshipItemType,
  name: string,
  model: string,
  manufacturer: string,
  cost_in_credits: string,
  max_atmosphering_speed: string,
  crew: string,
  passengers: string,
  cargo_capacity: string,
  consumables: string,
  hyperdrive_rating: string,
  MGLT: string,
  starship_class: string,
  pilots: ID[],
  films: ID[],
};

export type Vehicle = {
  id: ID,
  type: VehicleItemType,
  name: string,
  model: string,
  vehicle_class: string,
  manufacturer: string,
  length: string,
  cost_in_credits: string,
  crew: string,
  passengers: string,
  max_atmosphering_speed: string,
  cargo_capacity: string,
  consumables: string,
  films: ID[],
  pilots: ID[],
};

export type Species = {
  id: ID,
  type: SpeciesItemType,
  name: string,
  classification: string,
  designation: string,
  skin_colors: string,
  hair_colors: string,
  eye_colors: string,
  average_lifespan: string,
  homeworld: ID,
  language: string,
  people: ID[]
  films: ID[]
};

export type StarWarsItem =
  Film |
  Person |
  Planet |
  Starship |
  Vehicle |
  Species;