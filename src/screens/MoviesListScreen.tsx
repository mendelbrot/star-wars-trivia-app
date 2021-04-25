import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigation';
import ListItem from '../components/ListItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type DataItem = {
  id: string,
  title: string
}

type Data = Array<{
  id: string,
  title: string
}>

type MoviesListScreenRouteProp = RouteProp<
  RootStackParamList,
  'MoviesListScreen'
>;

type MoviesListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MoviesListScreen'
>;

type Props = {
  route: MoviesListScreenRouteProp;
  navigation: MoviesListScreenNavigationProp;
};

function renderItem({ item }: { item: DataItem }) {
  return (<ListItem title={item.title} />)
}

function MoviesList({ navigation }: Props) {
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default MoviesList;