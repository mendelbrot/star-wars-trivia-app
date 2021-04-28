import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StarWarsItem } from 'types/StarWarsTypes';
import StarWarsViewModel from 'models/StarWarsViewModel';
import ListButton from 'components/ListButton';

type Props = {
  item: StarWarsItem,
};

function NavItem({ item }: Props) {
  const navigation = useNavigation();

  const titleAttribute = StarWarsViewModel[item.type]['titleAttribute'] as keyof StarWarsItem;

  return (
    <ListButton
      title={item[titleAttribute] as string}
      onPress={() => navigation.navigate('DetailsScreen', { item })}
    />
  );
};

export default NavItem;