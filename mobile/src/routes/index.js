import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Login from '../pages/Login';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardOverlayEnabled: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName="profile">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
