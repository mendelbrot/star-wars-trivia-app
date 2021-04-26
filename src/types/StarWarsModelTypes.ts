import { StarWarsItemType, StarWarsItem } from 'types/StarWarsTypes';

// Types relating to the model in models/StarWarsViewModel.ts which is used for
// specifying data to display

export type DetailsAttributeType = {
  key: string,
  label: string
}

export type DetailsReferenceAttributeType = {
  key: string,
  label: string,
  type: StarWarsItemType
}

export type ModelAttributeType = {
  listTitleAttribute: string,
  detailsAttributes: DetailsAttributeType[],
  detailsReferenceSingle: DetailsReferenceAttributeType[],
  detailsReferenceList: DetailsReferenceAttributeType[]
}

export type StarWarsViewModelType = {
  [key in StarWarsItemType]: ModelAttributeType
};