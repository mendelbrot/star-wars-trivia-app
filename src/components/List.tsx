import React from 'react';
import { FlatList, TextInput, Button, View } from 'react-native';
import NavItem from 'components/NavItem';
import { StarWarsItem } from 'types/StarWarsTypes';
import SearchHeader from 'components/SearchHeader';

type Props = {
  items: StarWarsItem[],
  keyAttribute: string,
  getMoreItems: Function,
  setSearchQuery: Function,
  searchQuery: string
};

function List({ keyAttribute, items, getMoreItems, searchQuery, setSearchQuery }: Props) {

  function renderItem({ item }: { item: StarWarsItem }) {
    return (
      <NavItem item={item} />
    )
  }

  return (
    <FlatList
      data={items}
      ListHeaderComponent={
        <SearchHeader
          initialSearchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />}
      renderItem={renderItem}
      keyExtractor={item => item[keyAttribute] as string}
      onEndReached={() => getMoreItems()}
    />
  );
};

export default List;