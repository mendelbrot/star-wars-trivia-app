import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import StarWarsViewModel from 'models/StarWarsViewModel';
import ListButton from 'components/ListButton';

type HomeScreenRouteProp = RouteProp<
  RootStackParamList,
  'HomeScreen'
>;

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
  >;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ route, navigation }: Props) {

  return (
    <View>
      {Object.values(StarWarsViewModel).map((model) => {
        const { type, pluralLabel } = model;
        return (
          <ListButton
            key={type}
            title={pluralLabel}
            onPress={() => navigation.navigate('ListScreen', { type })}
          />
        );
      })}
    </View>
  );
};

export default HomeScreen;