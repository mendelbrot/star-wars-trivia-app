import { StarWarsItem, URL } from 'types/StarWarsTypes';

export type GetListReturnType = {
  count: number,
  next: URL | null
  previous: URL | null,
  results: StarWarsItem[]
};