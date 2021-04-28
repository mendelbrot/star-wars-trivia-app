import React from 'react';
import { FlatList, TextInput, Button, View } from 'react-native';
import NavItem from 'components/NavItem';
import { StarWarsItem } from 'types/StarWarsTypes';
import SearchHeader from 'components/SearchHeader';

type Props = {
  items: StarWarsItem[],
  keyAttribute: string,
  getMoreItems: Function,
  search: Function
};

function List({ keyAttribute, items, getMoreItems, search }: Props) {

  function renderItem({ item }: { item: StarWarsItem }) {
    return (
      <NavItem item={item} />
    )
  }

  return (
    <FlatList
      data={items}
      ListHeaderComponent={<SearchHeader search={search} />}
      renderItem={renderItem}
      keyExtractor={item => item[keyAttribute] as string}
      onEndReached={() => getMoreItems()}
    />
  );
};

export default List;