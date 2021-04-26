import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StarWarsItemMeta, StarWarsItem } from 'types/StarWarsItems';

type Props = {
  item: StarWarsItem;
};

function ListItem({ item }: Props) {
  const navigation = useNavigation();

  const titleAttribute = StarWarsItemMeta[item.type]['listTitleAttribute'] as keyof StarWarsItem;

  return (
    <View>
      <Button
        title={item[titleAttribute]}
        onPress={() => navigation.navigate('DetailsScreen', { item })}
      />
    </View>
  );
};

export default ListItem;