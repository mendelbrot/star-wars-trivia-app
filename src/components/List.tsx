import React from 'react';
import { FlatList } from 'react-native';
import NavItem from 'components/NavItem';
import { StarWarsItem } from 'types/StarWarsTypes';

type Props = {
  items: StarWarsItem[],
  keyAttribute: string,
  getMoreItems: Function
};

function renderItem({ item }: { item: StarWarsItem }) {
  return (
    <NavItem
      item={item}
    />
  )
}

function List({ keyAttribute, items, getMoreItems }: Props) {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item[keyAttribute] as string}
      onEndReached={() => getMoreItems()}
    />
  );
};

export default List;