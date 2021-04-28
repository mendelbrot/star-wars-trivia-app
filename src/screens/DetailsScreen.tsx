import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import { URL, StarWarsItem, StarWarsType } from 'types/StarWarsTypes';
import StarWarsViewModel from 'models/StarWarsViewModel';
import NavFromUrl from 'components/NavFromUrl';

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
    detailsReferenceSingle,
    detailsReferenceList
  } = StarWarsViewModel[item.type as StarWarsType];

  return (
    <ScrollView>
      {detailsAttributes.map(model => {
        const { key, label } = model;
        const attributeText = item[key as keyof StarWarsItem] as string;
        return (
          <View key={model.key}>
            <Text style={styles.title}>{label}</Text>
            <Text style={styles.text}>{attributeText}</Text>
          </View>
        );
      })}
      {detailsReferenceSingle.map(model => {
        const { key, label, type } = model;
        const url = item[key as keyof StarWarsItem] as URL;
        return (
          <View key={model.key}>
            <Text style={styles.title}>{label}</Text>
            <NavFromUrl key={url} type={type} url={url} />
          </View>
        );
      })}
      {detailsReferenceList.map(model => {
        const { key, label, type } = model;
        const urls = item[key as keyof StarWarsItem] as URL[];
        return (
          <View key={key}>
            <Text style={styles.title}>{label}</Text>
            {urls.map(url => {
              return (
                <NavFromUrl key={url} type={type} url={url} />
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 15,
  }
});

export default DetailsScreen;