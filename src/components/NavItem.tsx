import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StarWarsItem } from 'types/StarWarsTypes';
import StarWarsViewModel from 'models/StarWarsViewModel';

type Props = {
  item: StarWarsItem,
};

function NavItem({ item }: Props) {
  const navigation = useNavigation();

  const titleAttribute = StarWarsViewModel[item.type]['titleAttribute'] as keyof StarWarsItem;

  return (
    <Button
      title={item[titleAttribute] as string}
      onPress={() => navigation.navigate('DetailsScreen', { item })}
    />
  );
};

export default NavItem;