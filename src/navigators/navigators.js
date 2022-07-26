import React from 'react';
import {Easing} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
import NavigationScreen from '../screens/navigation-screen';
import UrbanEarsListScreen from '../screens/urban-ears-list';
import UrbanEarsDetails from '../screens/urban-ears-details';

import TravelCardList from '../screens/travel-card-list';
import TravelCardDetails from '../screens/travel-card-details';

const Stack = createSharedElementStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'NavigationScreen'}>
        <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
        <Stack.Screen
          name="UrbanEarsListScreen"
          component={UrbanEarsListScreen}
        />
        <Stack.Screen name="UrbanEarsDetails" component={UrbanEarsDetails} />
        <Stack.Screen name="TravelCardList" component={TravelCardList} />
        <Stack.Screen name="TravelCardDetails" component={TravelCardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
