import { StarWarsItemType, StarWarsItem } from 'types/StarWarsTypes';

export type GetListReturnType = {
  count: number,
  page: number | null,
  results: StarWarsItem[]
};