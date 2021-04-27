import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import ListScreen from 'screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { StarWarsItem, StarWarsType } from 'types/StarWarsTypes';
import StarWarsViewModel from 'models/StarWarsViewModel';

export type RootStackParamList = {
  HomeScreen: undefined;
  ListScreen: { type: StarWarsType};
  DetailsScreen: { item: StarWarsItem };
};

export const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <RootStack.Screen
          name="ListScreen"
          component={ListScreen}
          options={({ route }) => {
            const { type } = route.params;
            const title = StarWarsViewModel[type].pluralLabel;
            return { title }
          }}
        />
        <RootStack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
