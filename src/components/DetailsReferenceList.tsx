import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ID, DetailsReferenceMetaType } from 'types/StarWarsItems';

type Props = {
  
  itemMeta: DetailsReferenceMetaType,
  itemIds: ID[],
};

function DetailsReferenceList({ itemMeta, itemIds }: Props) {
  const { label, type } = itemMeta;

  return (
    <View>
      <Text>{label}</Text>
      {itemIds.map(id => {
        return (
          <Text key={id}>{id}</Text>
        );
      })}
    </View>
  );
};

export default DetailsReferenceList;