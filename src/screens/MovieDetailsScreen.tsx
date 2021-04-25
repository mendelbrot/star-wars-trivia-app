import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';

type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MovieDetailsScreen'
>;

type MovieDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetailsScreen'
>;

type Props = {
  route: MovieDetailsScreenRouteProp;
  navigation: MovieDetailsScreenNavigationProp;
};

function MovieDetails({ navigation, route }: Props) {
  return (
    <View>
      <Text>This is {route.params.name}'s MovieDetails</Text>
      <Text>{process.env['REACT_NATIVE_SWAPI_BASE_URL']}</Text>
    </View>
  );
};

export default MovieDetails;