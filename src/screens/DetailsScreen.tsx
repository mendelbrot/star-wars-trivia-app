import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import { ID, StarWarsItemMeta, StarWarsItem, DetailsReferenceMetaType } from 'types/StarWarsItems';
import DetailsReferenceList from 'components/DetailsReferenceList';

type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetailsScreen'
>;

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

function DetailsScreen({ navigation, route }: Props) {
  const { item } = route.params;
  const {
    detailsAttributes,
    detailsReferenceAttributes
  } = StarWarsItemMeta[item.type];

  return (
    <ScrollView>
      {detailsAttributes.map(itemMeta => {
        const itemLabel = itemMeta.label;
        const itemText = item[itemMeta.name as keyof StarWarsItem];
        return (
          <View key={itemMeta.name}>
            <Text>{itemLabel}</Text>
            <Text>{itemText}</Text>
          </View>
        );
      })}
      {detailsReferenceAttributes.map(itemMeta => {
        const itemIds = item[itemMeta.name as keyof StarWarsItem] as unknown as ID[];
        return (
          <DetailsReferenceList
            key={itemMeta.name}
            itemMeta={itemMeta as DetailsReferenceMetaType}
            itemIds={itemIds}
          />
        );
      })}
    </ScrollView>
  );
};

export default DetailsScreen;