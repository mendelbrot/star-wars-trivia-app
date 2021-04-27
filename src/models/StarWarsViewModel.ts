import { StarWarsViewModelType } from 'types/StarWarsModelTypes';

// This model is used by the views to determine how to display the data.

const StarWarsViewModel: StarWarsViewModelType = {
  Film: {
    listTitleAttribute: 'title' ,
    detailsAttributes: [
      { key: 'episode_id' , label: 'Episode ID' },
      { key: 'title' , label: 'Title' },
      { key: 'opening_crawl' , label: 'Opening Crawl' },
      { key: 'director' , label: 'Director' },
      { key: 'producer' , label: 'Producer' },
      { key: 'release_date' , label: 'Release Date' },
    ],
    detailsReferenceSingle: [],
    detailsReferenceList: [
      { key: 'characters' , label: 'Characters', type: 'Person' },
      { key: 'planets' , label: 'Planets', type: 'Planet' },
      { key: 'starships' , label: 'Starships', type: 'Starship' },
      { key: 'vehicles' , label: 'Vehicles', type: 'Vehicle' },
      { key: 'species' , label: 'Species', type: 'Species' },
    ],
  },
  Person: {
    listTitleAttribute: 'name' ,
    detailsAttributes: [
      { key: 'name' , label: 'Name' },
      { key: 'height' , label: 'Height' },
      { key: 'hair_color' , label: 'Hair Color' },
      { key: 'skin_color' , label: 'Skin Color' },
      { key: 'eye_color' , label: 'Eye Color' },
      { key: 'birth_year' , label: 'Birth Year' },
      { key: 'gender' , label: 'Gender' },
    ],
    detailsReferenceSingle: [
      { key: 'homeworld' , label: 'Home World', type: 'Planet' },
    ],
    detailsReferenceList: [
      { key: 'films' , label: 'Films', type: 'Film' },
      { key: 'species' , label: 'Species', type: 'Species' },
      { key: 'vehicles' , label: 'Vehicles', type: 'Vehicle' },
      { key: 'starships' , label: 'Starships', type: 'Starship' },
    ],
  },
  Planet: {
    listTitleAttribute: 'name' ,
    detailsAttributes: [
      { key: 'name' , label: 'Name' },
      { key: 'rotation_period' , label: 'Rotation Period' },
      { key: 'orbital_period' , label: 'Orbital Period' },
      { key: 'diameter' , label: 'Diameter' },
      { key: 'climate' , label: 'Climate' },
      { key: 'gravity' , label: 'Gravity' },
      { key: 'terrain' , label: 'Terrain' },
      { key: 'surface_water' , label: 'Surface Water' },
      { key: 'population' , label: 'Population' },
    ],
    detailsReferenceSingle: [],
    detailsReferenceList: [
      { key: 'residents' , label: 'Residents', type: 'Person' },
      { key: 'films' , label: 'Films', type: 'Film' },
    ],
  },
  Starship: {
    listTitleAttribute: 'name' ,
    detailsAttributes: [
      { key: 'name' , label: 'Name' },
      { key: 'model' , label: 'Model' },
      { key: 'manufacturer' , label: 'Manufacturer' },
      { key: 'cost_in_credits' , label: 'Cost in Credits' },
      { key: 'max_atmosphering_speed' , label: 'Max Atmospheric Speed' },
      { key: 'crew' , label: 'Crew' },
      { key: 'passengers' , label: 'Passengers' },
      { key: 'cargo_capacity' , label: 'Cargo Capacity' },
      { key: 'consumables' , label: 'Consumables' },
      { key: 'hyperdrive_rating' , label: 'Hyperdrive Rating' },
      { key: 'MGLT' , label: 'MGLT' },
      { key: 'starship_class' , label: 'Starship Class' },
    ],
    detailsReferenceSingle: [],
    detailsReferenceList: [
      { key: 'pilots' , label: 'Pilots', type: 'Person' },
      { key: 'films' , label: 'Films', type: 'Film' },
    ],
  },
  Vehicle: {
    listTitleAttribute: 'name' ,
    detailsAttributes: [
      { key: 'name' , label: 'Name' },
      { key: 'model' , label: 'Model' },
      { key: 'vehicle_class' , label: 'Vehicle Class' },
      { key: 'manufacturer' , label: 'Manufacturer' },
      { key: 'length' , label: 'Length' },
      { key: 'cost_in_credits' , label: 'Cost in Credits' },
      { key: 'crew' , label: 'Crew' },
      { key: 'passengers' , label: 'Passengers' },
      { key: 'max_atmosphering_speed' , label: 'Max Atmospheric Speed' },
      { key: 'cargo_capacity' , label: 'Cargo Capacity' },
      { key: 'consumables' , label: 'Consumables' },
    ],
    detailsReferenceSingle: [],
    detailsReferenceList: [
      { key: 'films' , label: 'Films', type: 'Film' },
      { key: 'pilots' , label: 'Pilots', type: 'Person' },
    ],
  },
  Species: {
    listTitleAttribute: 'name' ,
    detailsAttributes: [
      { key: 'name' , label: 'Name' },
      { key: 'classification' , label: 'Classification' },
      { key: 'designation' , label: 'Designation' },
      { key: 'skin_colors' , label: 'Skin Colors' },
      { key: 'hair_colors' , label: 'Hair Colors' },
      { key: 'eye_colors' , label: 'Eye Colors' },
      { key: 'average_lifespan' , label: 'Average Lifespan' },
      { key: 'language' , label: 'Language' },
    ],
    detailsReferenceSingle: [
      { key: 'homeworld' , label: 'Home World', type: 'Planet' },
    ],
    detailsReferenceList: [
      { key: 'people' , label: 'People', type: 'Person' },
      { key: 'films' , label: 'Films', type: 'Film' },
    ],
  },
};

export default StarWarsViewModel;