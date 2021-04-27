import React from 'react';
import { FlatList } from 'react-native';
import NavItem from 'components/NavItem';
import { StarWarsItem } from 'types/StarWarsTypes';

type Props = {
  items: StarWarsItem[],
  key: string,
};

function renderItem({ item }: { item: StarWarsItem }) {
  return (
    <NavItem
      item={item}
    />
  )
}

function List({ items, key }: Props) {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item[key] as string}
    />
  );
};

export default List;