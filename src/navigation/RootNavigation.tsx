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
          // set the nav bar title to be the type of star wars item if possible
          options={({ route }) => {
            try {
              const { type } = route.params;
              const title = StarWarsViewModel[type].pluralLabel;
              return { title }
            } catch (error) {
              return { title: 'List' }
            }
            
          }}
        />
        <RootStack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          // set the nav bar title to be the title attribute of the item if possible
          options={({ route }) => {
            try {
              const { item, item: { type } } = route.params;
              const titleKey = StarWarsViewModel[type].titleAttribute;
              const title = item[titleKey] as string;
              return { title }
            } catch (error) {
              return { title: 'Details' }
            }

          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
