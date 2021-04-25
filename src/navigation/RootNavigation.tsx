import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesListScreen from 'screens/MoviesListScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

export type RootStackParamList = {
  MoviesListScreen: undefined;
  MovieDetailsScreen: { name: string };
};

export const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="MoviesListScreen"
          component={MoviesListScreen}
          options={{ title: 'Movies' }}
        />
        <RootStack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
          options={{ title: 'Movie Details' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
