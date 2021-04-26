import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilmsListScreen from 'screens/FilmsListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { StarWarsItem } from 'types/StarWarsItems';

export type RootStackParamList = {
  FilmsListScreen: undefined;
  DetailsScreen: { item: StarWarsItem };
};

export const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="FilmsListScreen"
          component={FilmsListScreen}
          options={{ title: 'Films' }}
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
