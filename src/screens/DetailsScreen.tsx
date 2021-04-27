import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import { URL, StarWarsItem, StarWarsType } from 'types/StarWarsTypes';
import { DetailsReferenceAttributeType } from 'types/StarWarsModelTypes';
import StarWarsViewModel from 'models/StarWarsViewModel';
// import DetailsReferenceList from 'components/DetailsReferenceList';

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
    detailsReferenceList
  } = StarWarsViewModel[item.type as StarWarsType];

  return (
    <ScrollView>
      {detailsAttributes.map(model => {
        const { key, label } = model;
        const itemText = item[key as keyof StarWarsItem] as string;
        return (
          <View key={model.key}>
            <Text style={{ fontWeight: 'bold' }}>{label}</Text>
            <Text>{itemText}</Text>
          </View>
        );
      })}
      {/* {detailsReferenceList.map(itemMeta => {
        const itemIds = item[itemMeta.key as keyof StarWarsItem] as unknown as ID[];
        return (
          <DetailsReferenceList
            key={itemMeta.key}
            itemMeta={itemMeta as DetailsReferenceAttributeType}
            itemIds={itemIds}
          />
        );
      })} */}
    </ScrollView>
  );
};

export default DetailsScreen;