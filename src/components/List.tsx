import React from 'react';
import { FlatList } from 'react-native';
import ListItem from 'components/ListItem';

type Props = {
  data: any[];
};


function renderItem({ item }: { item: any }) {
  return (
    <ListItem
      item={item}
      key={item.id}
    />
  )
}

function List({ data }: Props) {

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  );
};

export default List;